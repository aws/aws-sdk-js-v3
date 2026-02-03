import {
  HandlerExecutionContext,
  InitializeHandler,
  InitializeHandlerArguments,
  MiddlewareStack,
  SerializeHandler,
  SerializeHandlerArguments,
} from "@smithy/types";

/**
 * FOR DEBUG USE ONLY.
 * This plugin logs or records the timings of the middleware named in options.middlewareNames.
 *
 * @param options.middlewareNames - names of the middleware to measure.
 * @param options.storage - a container for the data. If none is provided, metrics will be logged to console.
 *
 * @beta
 */
export function getMiddlewareTimerPlugin(
  options: {
    middlewareNames?: string[];
    storage?: Record<string, number[]>;
  } = {}
) {
  const middlewareNames =
    options.middlewareNames ??
    (["serializerMiddleware", "deserializerMiddleware", "httpSigningMiddleware", "retryMiddleware"] as string[]);

  return {
    applyToStack(middlewareStack: MiddlewareStack<any, any>) {
      for (const mw of middlewareNames) {
        middlewareStack.addRelativeTo(
          (next: SerializeHandler<any, any>, context: HandlerExecutionContext) =>
            async (args: SerializeHandlerArguments<any>) => {
              context.middlewareTimings[mw].leaderPreNext = performance.now();
              const handlerOutput = await next(args);
              context.middlewareTimings[mw].leaderPostNext = performance.now();
              return handlerOutput;
            },
          {
            name: mw + "-before",
            override: true,
            toMiddleware: mw,
            relation: "before",
          }
        );

        middlewareStack.addRelativeTo(
          (next: SerializeHandler<any, any>, context: HandlerExecutionContext) =>
            async (args: SerializeHandlerArguments<any>) => {
              context.middlewareTimings[mw].trailerPreNext = performance.now();
              const handlerOutput = await next(args);
              context.middlewareTimings[mw].trailerPostNext = performance.now();
              return handlerOutput;
            },
          {
            name: mw + "-after",
            override: true,
            toMiddleware: mw,
            relation: "after",
          }
        );
      }

      middlewareStack.add(
        (next: InitializeHandler<any, any>, context: HandlerExecutionContext) =>
          async (args: InitializeHandlerArguments<any>) => {
            context.middlewareTimings = context.middlewareTimings ?? ({} as Record<string, Record<string, number>>);
            for (const mw of middlewareNames) {
              context.middlewareTimings[mw] = {} as Record<string, number>;
            }

            const handlerOutput = await next(args);

            for (const [mw, timings] of Object.entries(
              context.middlewareTimings as Record<string, Record<string, number>>
            )) {
              const { leaderPreNext, trailerPreNext, trailerPostNext, leaderPostNext } = timings;
              /**
               * Formula note:
               *
               * Let M be the middleware we are measuring.
               * Let L be the middleware prior to the measured middleware,
               * and T be the middleware after the measured middleware.
               *
               * We take timings before L calls next, after L calls next,
               * before T calls next, and after T calls next.
               *
               * The own-time of M is therefore the period from:
               *  L-pre-next (before entering M from L) -> T-pre-next (after exiting M to T)
               *    plus
               *  T-post-next (return to M from T) -> L-post-next (exiting M to L)
               */
              const middlewareOwnTime = trailerPreNext - leaderPreNext + leaderPostNext - trailerPostNext;

              if (options.storage) {
                options.storage[mw] = options.storage[mw] ?? [];
                options.storage[mw].push(middlewareOwnTime);
              } else {
                console.log({
                  [mw]: middlewareOwnTime,
                });
              }
            }
            return handlerOutput;
          },
        {
          name: "middleware-timing-logger-middleware",
          override: true,
          step: "initialize",
        }
      );
    },
  };
}

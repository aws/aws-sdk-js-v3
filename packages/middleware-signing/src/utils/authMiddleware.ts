import { HttpRequest } from "@aws-sdk/protocol-http";
import {
  AuthScheme,
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  FinalizeRequestMiddleware,
  HandlerExecutionContext,
} from "@aws-sdk/types";

import { AuthResolvedConfig } from "../configurations";
import { getDateHeader } from "./time/getDateHeader";
import { getSkewCorrectedDate } from "./time/getSkewCorrectedDate";
import { getUpdatedSystemClockOffset } from "./time/getUpdatedSystemClockOffset";

export const authMiddleware =
  <Input extends object, Output extends object>(
    options: AuthResolvedConfig
  ): FinalizeRequestMiddleware<Input, Output> =>
  (next: FinalizeHandler<Input, Output>, context: HandlerExecutionContext): FinalizeHandler<Input, Output> =>
    async function (args: FinalizeHandlerArguments<Input>): Promise<FinalizeHandlerOutput<Output>> {
      if (!HttpRequest.isInstance(args.request)) return next(args);

      // TODO(identityandauth): call authScheme resolver
      const authScheme: AuthScheme | undefined = context.endpointV2?.properties?.authSchemes?.[0];

      const multiRegionOverride: string | undefined =
        authScheme?.name === "sigv4a" ? authScheme?.signingRegionSet?.join(",") : undefined;

      const signer = await options.signer(authScheme);

      const output = await next({
        ...args,
        request: await signer.sign(args.request, {
          signingDate: getSkewCorrectedDate(options.systemClockOffset),
          signingRegion: multiRegionOverride || context["signing_region"],
          signingService: context["signing_service"],
        }),
      }).catch((error) => {
        const serverTime: string | undefined = error.ServerTime ?? getDateHeader(error.$response);
        if (serverTime) {
          options.systemClockOffset = getUpdatedSystemClockOffset(serverTime, options.systemClockOffset);
        }
        throw error;
      });

      const dateHeader = getDateHeader(output.response);
      if (dateHeader) {
        options.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, options.systemClockOffset);
      }

      return output;
    };

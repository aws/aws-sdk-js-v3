import {
  BuildHandler,
  BuildHandlerArguments,
  EventStreamPayloadHandler as IEventStreamPayloadHandler,
} from "@smithy/types";

export const eventStreamPayloadHandler: IEventStreamPayloadHandler = {
  handle: (next: BuildHandler<any, any>, args: BuildHandlerArguments<any>) => next(args),
};

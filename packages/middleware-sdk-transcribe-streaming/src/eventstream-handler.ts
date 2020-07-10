import {
  BuildHandler,
  BuildHandlerArguments,
  EventStreamPayloadHandler as IEventStreamPayloadHandler,
} from "@aws-sdk/types";

export const eventStreamPayloadHandler: IEventStreamPayloadHandler = {
  handle: (next: BuildHandler<any, any>, args: BuildHandlerArguments<any>) => next(args),
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EventsConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BotId: {
      shape: {
        type: "string"
      }
    },
    OutboundEventsHTTPSEndpoint: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    LambdaFunctionArn: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};

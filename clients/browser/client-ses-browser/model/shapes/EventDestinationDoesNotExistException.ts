import { Structure as _Structure_ } from "@aws-sdk/types";

export const EventDestinationDoesNotExistException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigurationSetName: {
      shape: {
        type: "string"
      }
    },
    EventDestinationName: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "EventDestinationDoesNotExistException",
  exceptionCode: "EventDestinationDoesNotExist"
};

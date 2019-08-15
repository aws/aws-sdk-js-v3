import { _EventList } from "./_EventList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CloudFunctionConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Event: {
      shape: {
        type: "string"
      }
    },
    Events: {
      shape: _EventList,
      locationName: "Event"
    },
    CloudFunction: {
      shape: {
        type: "string"
      }
    },
    InvocationRole: {
      shape: {
        type: "string"
      }
    }
  }
};

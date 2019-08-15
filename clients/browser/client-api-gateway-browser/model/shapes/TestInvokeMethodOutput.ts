import { _MapOfStringToString } from "./_MapOfStringToString";
import { _MapOfStringToList } from "./_MapOfStringToList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TestInvokeMethodOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    status: {
      shape: {
        type: "integer"
      }
    },
    body: {
      shape: {
        type: "string"
      }
    },
    headers: {
      shape: _MapOfStringToString
    },
    multiValueHeaders: {
      shape: _MapOfStringToList
    },
    log: {
      shape: {
        type: "string"
      }
    },
    latency: {
      shape: {
        type: "integer"
      }
    }
  }
};

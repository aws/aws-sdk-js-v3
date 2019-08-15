import { _MapOfStringToList } from "./_MapOfStringToList";
import { _MapOfStringToString } from "./_MapOfStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TestInvokeAuthorizerOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    clientStatus: {
      shape: {
        type: "integer"
      }
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
    },
    principalId: {
      shape: {
        type: "string"
      }
    },
    policy: {
      shape: {
        type: "string"
      }
    },
    authorization: {
      shape: _MapOfStringToList
    },
    claims: {
      shape: _MapOfStringToString
    }
  }
};

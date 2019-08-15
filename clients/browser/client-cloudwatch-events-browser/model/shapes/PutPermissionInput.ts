import { _Condition } from "./_Condition";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutPermissionInput: _Structure_ = {
  type: "structure",
  required: ["Action", "Principal", "StatementId"],
  members: {
    EventBusName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Action: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Principal: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StatementId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Condition: {
      shape: _Condition
    }
  }
};

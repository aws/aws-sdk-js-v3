import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemovePermissionInput: _Structure_ = {
  type: "structure",
  required: ["StatementId"],
  members: {
    StatementId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EventBusName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

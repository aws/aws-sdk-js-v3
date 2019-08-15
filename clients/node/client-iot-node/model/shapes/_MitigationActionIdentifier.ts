import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MitigationActionIdentifier: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    actionName: {
      shape: {
        type: "string"
      }
    },
    actionArn: {
      shape: {
        type: "string"
      }
    },
    creationDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};

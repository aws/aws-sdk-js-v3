import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UnprocessedUpdateAction: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReplicationGroupId: {
      shape: {
        type: "string"
      }
    },
    ServiceUpdateName: {
      shape: {
        type: "string"
      }
    },
    ErrorType: {
      shape: {
        type: "string"
      }
    },
    ErrorMessage: {
      shape: {
        type: "string"
      }
    }
  }
};

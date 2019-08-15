import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServiceError: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceErrorId: {
      shape: {
        type: "string"
      }
    },
    StackId: {
      shape: {
        type: "string"
      }
    },
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    Message: {
      shape: {
        type: "string"
      }
    },
    CreatedAt: {
      shape: {
        type: "string"
      }
    }
  }
};

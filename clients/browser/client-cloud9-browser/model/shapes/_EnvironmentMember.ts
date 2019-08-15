import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EnvironmentMember: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    permissions: {
      shape: {
        type: "string"
      }
    },
    userId: {
      shape: {
        type: "string"
      }
    },
    userArn: {
      shape: {
        type: "string"
      }
    },
    environmentId: {
      shape: {
        type: "string"
      }
    },
    lastAccess: {
      shape: {
        type: "timestamp"
      }
    }
  }
};

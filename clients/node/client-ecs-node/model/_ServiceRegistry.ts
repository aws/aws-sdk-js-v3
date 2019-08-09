import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServiceRegistry: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    registryArn: {
      shape: {
        type: "string"
      }
    },
    port: {
      shape: {
        type: "integer"
      }
    },
    containerName: {
      shape: {
        type: "string"
      }
    },
    containerPort: {
      shape: {
        type: "integer"
      }
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BulkDeployment: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BulkDeploymentArn: {
      shape: {
        type: "string"
      }
    },
    BulkDeploymentId: {
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

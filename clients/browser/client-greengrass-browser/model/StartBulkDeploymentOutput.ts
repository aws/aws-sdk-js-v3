import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartBulkDeploymentOutput: _Structure_ = {
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
    }
  }
};

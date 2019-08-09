import { _ErrorDetails } from "./_ErrorDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BulkDeploymentResult: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CreatedAt: {
      shape: {
        type: "string"
      }
    },
    DeploymentArn: {
      shape: {
        type: "string"
      }
    },
    DeploymentId: {
      shape: {
        type: "string"
      }
    },
    DeploymentStatus: {
      shape: {
        type: "string"
      }
    },
    DeploymentType: {
      shape: {
        type: "string"
      }
    },
    ErrorDetails: {
      shape: _ErrorDetails
    },
    ErrorMessage: {
      shape: {
        type: "string"
      }
    },
    GroupArn: {
      shape: {
        type: "string"
      }
    }
  }
};

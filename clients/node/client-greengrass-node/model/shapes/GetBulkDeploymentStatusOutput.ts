import { _BulkDeploymentMetrics } from "./_BulkDeploymentMetrics";
import { _ErrorDetails } from "./_ErrorDetails";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBulkDeploymentStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BulkDeploymentMetrics: {
      shape: _BulkDeploymentMetrics
    },
    BulkDeploymentStatus: {
      shape: {
        type: "string"
      }
    },
    CreatedAt: {
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
    tags: {
      shape: _Tags
    }
  }
};

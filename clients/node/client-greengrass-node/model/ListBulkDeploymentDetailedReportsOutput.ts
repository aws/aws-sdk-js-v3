import { _BulkDeploymentResults } from "./_BulkDeploymentResults";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBulkDeploymentDetailedReportsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Deployments: {
      shape: _BulkDeploymentResults
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

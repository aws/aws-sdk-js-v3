import { _BulkDeployments } from "./_BulkDeployments";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBulkDeploymentsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BulkDeployments: {
      shape: _BulkDeployments
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

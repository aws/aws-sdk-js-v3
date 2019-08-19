import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBulkDeploymentDetailedReportsInput: _Structure_ = {
  type: "structure",
  required: ["BulkDeploymentId"],
  members: {
    BulkDeploymentId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "BulkDeploymentId"
    },
    MaxResults: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "MaxResults"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "NextToken"
    }
  }
};

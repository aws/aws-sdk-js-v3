import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartDeploymentInput: _Structure_ = {
  type: "structure",
  required: ["appId", "branchName"],
  members: {
    appId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "appId"
    },
    branchName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "branchName"
    },
    jobId: {
      shape: {
        type: "string"
      }
    },
    sourceUrl: {
      shape: {
        type: "string"
      }
    }
  }
};

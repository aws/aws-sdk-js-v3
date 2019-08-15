import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDeploymentOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CreatedDate: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      },
      locationName: "createdDate"
    },
    DeploymentId: {
      shape: {
        type: "string"
      },
      locationName: "deploymentId"
    },
    DeploymentStatus: {
      shape: {
        type: "string"
      },
      locationName: "deploymentStatus"
    },
    DeploymentStatusMessage: {
      shape: {
        type: "string"
      },
      locationName: "deploymentStatusMessage"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDeploymentInput: _Structure_ = {
  type: "structure",
  required: ["GroupId", "DeploymentType"],
  members: {
    AmznClientToken: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "X-Amzn-Client-Token"
    },
    DeploymentId: {
      shape: {
        type: "string"
      }
    },
    DeploymentType: {
      shape: {
        type: "string"
      }
    },
    GroupId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "GroupId"
    },
    GroupVersionId: {
      shape: {
        type: "string"
      }
    }
  }
};

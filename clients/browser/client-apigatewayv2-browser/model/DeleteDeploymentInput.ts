import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDeploymentInput: _Structure_ = {
  type: "structure",
  required: ["ApiId", "DeploymentId"],
  members: {
    ApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    },
    DeploymentId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "deploymentId"
    }
  }
};

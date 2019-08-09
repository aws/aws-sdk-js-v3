import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDeploymentStatusInput: _Structure_ = {
  type: "structure",
  required: ["GroupId", "DeploymentId"],
  members: {
    DeploymentId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "DeploymentId"
    },
    GroupId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "GroupId"
    }
  }
};

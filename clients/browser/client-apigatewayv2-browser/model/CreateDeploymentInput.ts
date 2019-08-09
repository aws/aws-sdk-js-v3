import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDeploymentInput: _Structure_ = {
  type: "structure",
  required: ["ApiId"],
  members: {
    ApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    StageName: {
      shape: {
        type: "string"
      },
      locationName: "stageName"
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetStageInput: _Structure_ = {
  type: "structure",
  required: ["StageName", "ApiId"],
  members: {
    ApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    },
    StageName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "stageName"
    }
  }
};

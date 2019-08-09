import { Structure as _Structure_ } from "@aws-sdk/types";

export const FlushStageCacheInput: _Structure_ = {
  type: "structure",
  required: ["restApiId", "stageName"],
  members: {
    restApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "restapi_id"
    },
    stageName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "stage_name"
    }
  }
};

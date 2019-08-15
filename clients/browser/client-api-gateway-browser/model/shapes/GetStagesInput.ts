import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetStagesInput: _Structure_ = {
  type: "structure",
  required: ["restApiId"],
  members: {
    restApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "restapi_id"
    },
    deploymentId: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "deploymentId"
    }
  }
};

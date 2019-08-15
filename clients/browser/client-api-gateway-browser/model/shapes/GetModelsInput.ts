import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetModelsInput: _Structure_ = {
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
    position: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "position"
    },
    limit: {
      shape: {
        type: "integer"
      },
      location: "querystring",
      locationName: "limit"
    }
  }
};

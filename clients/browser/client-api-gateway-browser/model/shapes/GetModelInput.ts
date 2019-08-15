import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetModelInput: _Structure_ = {
  type: "structure",
  required: ["restApiId", "modelName"],
  members: {
    restApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "restapi_id"
    },
    modelName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "model_name"
    },
    flatten: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "flatten"
    }
  }
};

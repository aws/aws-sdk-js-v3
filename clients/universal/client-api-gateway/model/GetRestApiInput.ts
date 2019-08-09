import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRestApiInput: _Structure_ = {
  type: "structure",
  required: ["restApiId"],
  members: {
    restApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "restapi_id"
    }
  }
};

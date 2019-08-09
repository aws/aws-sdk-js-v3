import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteResourceInput: _Structure_ = {
  type: "structure",
  required: ["restApiId", "resourceId"],
  members: {
    restApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "restapi_id"
    },
    resourceId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "resource_id"
    }
  }
};

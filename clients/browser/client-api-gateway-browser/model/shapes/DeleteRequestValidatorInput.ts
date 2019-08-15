import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteRequestValidatorInput: _Structure_ = {
  type: "structure",
  required: ["restApiId", "requestValidatorId"],
  members: {
    restApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "restapi_id"
    },
    requestValidatorId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "requestvalidator_id"
    }
  }
};

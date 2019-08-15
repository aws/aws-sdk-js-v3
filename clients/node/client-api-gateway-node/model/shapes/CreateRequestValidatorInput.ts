import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRequestValidatorInput: _Structure_ = {
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
    name: {
      shape: {
        type: "string"
      }
    },
    validateRequestBody: {
      shape: {
        type: "boolean"
      }
    },
    validateRequestParameters: {
      shape: {
        type: "boolean"
      }
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateRequestValidatorOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string"
      }
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

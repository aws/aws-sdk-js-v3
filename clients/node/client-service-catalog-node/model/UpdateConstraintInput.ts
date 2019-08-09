import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateConstraintInput: _Structure_ = {
  type: "structure",
  required: ["Id"],
  members: {
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    },
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Parameters: {
      shape: {
        type: "string"
      }
    }
  }
};

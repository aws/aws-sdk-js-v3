import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateSoftwareTokenOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SecretCode: {
      shape: {
        type: "string",
        sensitive: true,
        min: 16
      }
    },
    Session: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};

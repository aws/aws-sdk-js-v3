import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateSoftwareTokenInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccessToken: {
      shape: {
        type: "string",
        sensitive: true
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

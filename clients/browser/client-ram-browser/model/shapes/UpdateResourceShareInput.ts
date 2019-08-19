import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateResourceShareInput: _Structure_ = {
  type: "structure",
  required: ["resourceShareArn"],
  members: {
    resourceShareArn: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    allowExternalPrincipals: {
      shape: {
        type: "boolean"
      }
    },
    clientToken: {
      shape: {
        type: "string"
      }
    }
  }
};

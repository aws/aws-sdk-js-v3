import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SharePrincipal: _Structure_ = {
  type: "structure",
  required: ["Id", "Type", "Role"],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    Role: {
      shape: {
        type: "string"
      }
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Principal: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PrincipalARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PrincipalType: {
      shape: {
        type: "string"
      }
    }
  }
};

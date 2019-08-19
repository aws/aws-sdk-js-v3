import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3Grantee: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TypeIdentifier: {
      shape: {
        type: "string"
      }
    },
    Identifier: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DisplayName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

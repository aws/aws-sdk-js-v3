import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SAMLProviderListEntry: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Arn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    ValidUntil: {
      shape: {
        type: "timestamp"
      }
    },
    CreateDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};

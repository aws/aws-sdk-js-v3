import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProviderUserIdentifierType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProviderName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ProviderAttributeName: {
      shape: {
        type: "string"
      }
    },
    ProviderAttributeValue: {
      shape: {
        type: "string"
      }
    }
  }
};

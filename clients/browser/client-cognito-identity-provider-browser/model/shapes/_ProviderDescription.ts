import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProviderDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProviderName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ProviderType: {
      shape: {
        type: "string"
      }
    },
    LastModifiedDate: {
      shape: {
        type: "timestamp"
      }
    },
    CreationDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};

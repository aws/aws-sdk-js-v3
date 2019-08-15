import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceCountFilters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceType: {
      shape: {
        type: "string"
      }
    },
    AccountId: {
      shape: {
        type: "string"
      }
    },
    Region: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

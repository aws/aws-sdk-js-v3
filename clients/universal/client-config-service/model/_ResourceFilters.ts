import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceFilters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccountId: {
      shape: {
        type: "string"
      }
    },
    ResourceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceName: {
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

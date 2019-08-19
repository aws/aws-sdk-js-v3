import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApplicationComponent: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ComponentName: {
      shape: {
        type: "string"
      }
    },
    ResourceType: {
      shape: {
        type: "string"
      }
    },
    Tier: {
      shape: {
        type: "string"
      }
    },
    Monitor: {
      shape: {
        type: "boolean"
      }
    }
  }
};

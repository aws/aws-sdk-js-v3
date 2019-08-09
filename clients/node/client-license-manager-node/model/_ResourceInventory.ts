import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceInventory: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceId: {
      shape: {
        type: "string"
      }
    },
    ResourceType: {
      shape: {
        type: "string"
      }
    },
    ResourceArn: {
      shape: {
        type: "string"
      }
    },
    Platform: {
      shape: {
        type: "string"
      }
    },
    PlatformVersion: {
      shape: {
        type: "string"
      }
    },
    ResourceOwningAccountId: {
      shape: {
        type: "string"
      }
    }
  }
};

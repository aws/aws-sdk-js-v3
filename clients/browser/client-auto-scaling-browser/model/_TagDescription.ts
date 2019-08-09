import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TagDescription: _Structure_ = {
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
    Key: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Value: {
      shape: {
        type: "string"
      }
    },
    PropagateAtLaunch: {
      shape: {
        type: "boolean"
      }
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateComponentConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["ResourceGroupName", "ComponentName"],
  members: {
    ResourceGroupName: {
      shape: {
        type: "string"
      }
    },
    ComponentName: {
      shape: {
        type: "string"
      }
    },
    Monitor: {
      shape: {
        type: "boolean"
      }
    },
    Tier: {
      shape: {
        type: "string"
      }
    },
    ComponentConfiguration: {
      shape: {
        type: "string"
      }
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SdkConfigurationProperty: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    friendlyName: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    required: {
      shape: {
        type: "boolean"
      }
    },
    defaultValue: {
      shape: {
        type: "string"
      }
    }
  }
};

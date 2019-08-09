import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConfigurationTag: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    configurationType: {
      shape: {
        type: "string"
      }
    },
    configurationId: {
      shape: {
        type: "string"
      }
    },
    key: {
      shape: {
        type: "string"
      }
    },
    value: {
      shape: {
        type: "string"
      }
    },
    timeOfCreation: {
      shape: {
        type: "timestamp"
      }
    }
  }
};

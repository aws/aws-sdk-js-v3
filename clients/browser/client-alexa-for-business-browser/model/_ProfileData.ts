import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProfileData: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProfileArn: {
      shape: {
        type: "string"
      }
    },
    ProfileName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    IsDefault: {
      shape: {
        type: "boolean"
      }
    },
    Address: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Timezone: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DistanceUnit: {
      shape: {
        type: "string"
      }
    },
    TemperatureUnit: {
      shape: {
        type: "string"
      }
    },
    WakeWord: {
      shape: {
        type: "string"
      }
    }
  }
};

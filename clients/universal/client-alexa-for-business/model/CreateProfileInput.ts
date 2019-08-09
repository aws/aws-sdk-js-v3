import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateProfileInput: _Structure_ = {
  type: "structure",
  required: [
    "ProfileName",
    "Timezone",
    "Address",
    "DistanceUnit",
    "TemperatureUnit",
    "WakeWord"
  ],
  members: {
    ProfileName: {
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
    Address: {
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
    },
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 10
      }
    },
    SetupModeDisabled: {
      shape: {
        type: "boolean"
      }
    },
    MaxVolumeLimit: {
      shape: {
        type: "integer"
      }
    },
    PSTNEnabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};

import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ActivateGatewayInput: _Structure_ = {
  type: "structure",
  required: [
    "ActivationKey",
    "GatewayName",
    "GatewayTimezone",
    "GatewayRegion"
  ],
  members: {
    ActivationKey: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GatewayName: {
      shape: {
        type: "string",
        min: 2
      }
    },
    GatewayTimezone: {
      shape: {
        type: "string",
        min: 3
      }
    },
    GatewayRegion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GatewayType: {
      shape: {
        type: "string",
        min: 2
      }
    },
    TapeDriveType: {
      shape: {
        type: "string",
        min: 2
      }
    },
    MediumChangerType: {
      shape: {
        type: "string",
        min: 2
      }
    },
    Tags: {
      shape: _Tags
    }
  }
};

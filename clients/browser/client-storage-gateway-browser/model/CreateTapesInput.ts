import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTapesInput: _Structure_ = {
  type: "structure",
  required: [
    "GatewayARN",
    "TapeSizeInBytes",
    "ClientToken",
    "NumTapesToCreate",
    "TapeBarcodePrefix"
  ],
  members: {
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    TapeSizeInBytes: {
      shape: {
        type: "integer"
      }
    },
    ClientToken: {
      shape: {
        type: "string",
        min: 5
      }
    },
    NumTapesToCreate: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    TapeBarcodePrefix: {
      shape: {
        type: "string",
        min: 1
      }
    },
    KMSEncrypted: {
      shape: {
        type: "boolean"
      }
    },
    KMSKey: {
      shape: {
        type: "string",
        min: 7
      }
    },
    PoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Tags: {
      shape: _Tags
    }
  }
};

import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTapeWithBarcodeInput: _Structure_ = {
  type: "structure",
  required: ["GatewayARN", "TapeSizeInBytes", "TapeBarcode"],
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
    TapeBarcode: {
      shape: {
        type: "string",
        min: 7
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

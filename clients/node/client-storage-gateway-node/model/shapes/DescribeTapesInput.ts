import { _TapeARNs } from "./_TapeARNs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTapesInput: _Structure_ = {
  type: "structure",
  required: ["GatewayARN"],
  members: {
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    TapeARNs: {
      shape: _TapeARNs
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Limit: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};

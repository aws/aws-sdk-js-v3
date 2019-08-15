import { Structure as _Structure_ } from "@aws-sdk/types";

export const CancelRetrievalInput: _Structure_ = {
  type: "structure",
  required: ["GatewayARN", "TapeARN"],
  members: {
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    TapeARN: {
      shape: {
        type: "string",
        min: 50
      }
    }
  }
};

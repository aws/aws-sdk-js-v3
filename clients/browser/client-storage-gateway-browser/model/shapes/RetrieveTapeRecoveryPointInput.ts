import { Structure as _Structure_ } from "@aws-sdk/types";

export const RetrieveTapeRecoveryPointInput: _Structure_ = {
  type: "structure",
  required: ["TapeARN", "GatewayARN"],
  members: {
    TapeARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    }
  }
};

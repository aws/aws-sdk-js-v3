import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListFileSharesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    Limit: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

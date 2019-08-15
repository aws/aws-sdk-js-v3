import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDataEndpointInput: _Structure_ = {
  type: "structure",
  required: ["APIName"],
  members: {
    StreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StreamARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    APIName: {
      shape: {
        type: "string"
      }
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeUploadBufferInput: _Structure_ = {
  type: "structure",
  required: ["GatewayARN"],
  members: {
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeHsmInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HsmArn: {
      shape: {
        type: "string"
      }
    },
    HsmSerialNumber: {
      shape: {
        type: "string"
      }
    }
  }
};

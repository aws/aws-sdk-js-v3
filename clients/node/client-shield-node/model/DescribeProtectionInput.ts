import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeProtectionInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProtectionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLoaOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    loaContent: {
      shape: {
        type: "blob"
      }
    },
    loaContentType: {
      shape: {
        type: "string"
      }
    }
  }
};

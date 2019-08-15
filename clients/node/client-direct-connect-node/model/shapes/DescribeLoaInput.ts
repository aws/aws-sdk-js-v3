import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLoaInput: _Structure_ = {
  type: "structure",
  required: ["connectionId"],
  members: {
    connectionId: {
      shape: {
        type: "string"
      }
    },
    providerName: {
      shape: {
        type: "string"
      }
    },
    loaContentType: {
      shape: {
        type: "string"
      }
    }
  }
};

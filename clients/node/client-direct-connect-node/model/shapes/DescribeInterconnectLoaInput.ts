import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInterconnectLoaInput: _Structure_ = {
  type: "structure",
  required: ["interconnectId"],
  members: {
    interconnectId: {
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

import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeNodeAssociationStatusInput: _Structure_ = {
  type: "structure",
  required: ["NodeAssociationStatusToken", "ServerName"],
  members: {
    NodeAssociationStatusToken: {
      shape: {
        type: "string"
      }
    },
    ServerName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

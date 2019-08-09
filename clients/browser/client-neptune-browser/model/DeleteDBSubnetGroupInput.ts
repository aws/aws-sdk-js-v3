import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDBSubnetGroupInput: _Structure_ = {
  type: "structure",
  required: ["DBSubnetGroupName"],
  members: {
    DBSubnetGroupName: {
      shape: {
        type: "string"
      }
    }
  }
};

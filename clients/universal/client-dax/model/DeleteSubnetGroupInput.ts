import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteSubnetGroupInput: _Structure_ = {
  type: "structure",
  required: ["SubnetGroupName"],
  members: {
    SubnetGroupName: {
      shape: {
        type: "string"
      }
    }
  }
};

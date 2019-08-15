import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDBSecurityGroupInput: _Structure_ = {
  type: "structure",
  required: ["DBSecurityGroupName"],
  members: {
    DBSecurityGroupName: {
      shape: {
        type: "string"
      }
    }
  }
};

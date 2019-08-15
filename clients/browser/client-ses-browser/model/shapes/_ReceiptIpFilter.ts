import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReceiptIpFilter: _Structure_ = {
  type: "structure",
  required: ["Policy", "Cidr"],
  members: {
    Policy: {
      shape: {
        type: "string"
      }
    },
    Cidr: {
      shape: {
        type: "string"
      }
    }
  }
};

import { _ReceiptIpFilter } from "./_ReceiptIpFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReceiptFilter: _Structure_ = {
  type: "structure",
  required: ["Name", "IpFilter"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    IpFilter: {
      shape: _ReceiptIpFilter
    }
  }
};

import { List as _List_ } from "@aws-sdk/types";
import { _Subnet } from "./_Subnet";

export const _SubnetList: _List_ = {
  type: "list",
  member: {
    shape: _Subnet
  }
};

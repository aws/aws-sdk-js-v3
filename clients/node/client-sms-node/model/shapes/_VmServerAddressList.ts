import { List as _List_ } from "@aws-sdk/types";
import { _VmServerAddress } from "./_VmServerAddress";

export const _VmServerAddressList: _List_ = {
  type: "list",
  member: {
    shape: _VmServerAddress
  }
};

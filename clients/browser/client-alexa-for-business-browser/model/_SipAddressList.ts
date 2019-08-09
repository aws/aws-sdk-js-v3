import { List as _List_ } from "@aws-sdk/types";
import { _SipAddress } from "./_SipAddress";

export const _SipAddressList: _List_ = {
  type: "list",
  member: {
    shape: _SipAddress
  }
};

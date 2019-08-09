import { List as _List_ } from "@aws-sdk/types";
import { _PrivateIpAddressDetails } from "./_PrivateIpAddressDetails";

export const _PrivateIpAddresses: _List_ = {
  type: "list",
  member: {
    shape: _PrivateIpAddressDetails
  }
};

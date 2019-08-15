import { List as _List_ } from "@aws-sdk/types";
import { _IpAddressRequest } from "./_IpAddressRequest";

export const _IpAddressesRequest: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _IpAddressRequest
  }
};

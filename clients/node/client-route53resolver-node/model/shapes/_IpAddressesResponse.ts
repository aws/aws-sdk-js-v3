import { List as _List_ } from "@aws-sdk/types";
import { _IpAddressResponse } from "./_IpAddressResponse";

export const _IpAddressesResponse: _List_ = {
  type: "list",
  member: {
    shape: _IpAddressResponse
  }
};

import { List as _List_ } from "@aws-sdk/types";
import { _NetworkInterfacePrivateIpAddress } from "./_NetworkInterfacePrivateIpAddress";

export const _NetworkInterfacePrivateIpAddressList: _List_ = {
  type: "list",
  member: {
    shape: _NetworkInterfacePrivateIpAddress,
    locationName: "item"
  }
};

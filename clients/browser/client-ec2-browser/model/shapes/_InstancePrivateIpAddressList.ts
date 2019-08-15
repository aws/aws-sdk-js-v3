import { List as _List_ } from "@aws-sdk/types";
import { _InstancePrivateIpAddress } from "./_InstancePrivateIpAddress";

export const _InstancePrivateIpAddressList: _List_ = {
  type: "list",
  member: {
    shape: _InstancePrivateIpAddress,
    locationName: "item"
  }
};

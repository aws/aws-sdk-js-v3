import { List as _List_ } from "@aws-sdk/types";
import { _PrivateIp } from "./_PrivateIp";

export const _PrivateIpAddresses: _List_ = {
  type: "list",
  member: {
    shape: _PrivateIp
  }
};

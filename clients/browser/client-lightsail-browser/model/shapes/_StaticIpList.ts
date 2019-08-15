import { List as _List_ } from "@aws-sdk/types";
import { _StaticIp } from "./_StaticIp";

export const _StaticIpList: _List_ = {
  type: "list",
  member: {
    shape: _StaticIp
  }
};

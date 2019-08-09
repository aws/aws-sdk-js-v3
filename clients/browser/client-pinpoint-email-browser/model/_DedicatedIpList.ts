import { List as _List_ } from "@aws-sdk/types";
import { _DedicatedIp } from "./_DedicatedIp";

export const _DedicatedIpList: _List_ = {
  type: "list",
  member: {
    shape: _DedicatedIp
  }
};

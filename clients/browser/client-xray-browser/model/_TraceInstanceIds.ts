import { List as _List_ } from "@aws-sdk/types";
import { _InstanceIdDetail } from "./_InstanceIdDetail";

export const _TraceInstanceIds: _List_ = {
  type: "list",
  member: {
    shape: _InstanceIdDetail
  }
};

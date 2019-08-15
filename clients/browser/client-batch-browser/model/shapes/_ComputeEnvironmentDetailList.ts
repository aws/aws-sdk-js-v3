import { List as _List_ } from "@aws-sdk/types";
import { _ComputeEnvironmentDetail } from "./_ComputeEnvironmentDetail";

export const _ComputeEnvironmentDetailList: _List_ = {
  type: "list",
  member: {
    shape: _ComputeEnvironmentDetail
  }
};

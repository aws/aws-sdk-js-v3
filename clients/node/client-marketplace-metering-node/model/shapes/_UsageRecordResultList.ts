import { List as _List_ } from "@aws-sdk/types";
import { _UsageRecordResult } from "./_UsageRecordResult";

export const _UsageRecordResultList: _List_ = {
  type: "list",
  member: {
    shape: _UsageRecordResult
  }
};

import { List as _List_ } from "@aws-sdk/types";
import { _UsageRecord } from "./_UsageRecord";

export const _UsageRecordList: _List_ = {
  type: "list",
  member: {
    shape: _UsageRecord
  }
};

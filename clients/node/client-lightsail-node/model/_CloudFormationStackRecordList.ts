import { List as _List_ } from "@aws-sdk/types";
import { _CloudFormationStackRecord } from "./_CloudFormationStackRecord";

export const _CloudFormationStackRecordList: _List_ = {
  type: "list",
  member: {
    shape: _CloudFormationStackRecord
  }
};

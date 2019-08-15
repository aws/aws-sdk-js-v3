import { List as _List_ } from "@aws-sdk/types";
import { _AggregateComplianceCount } from "./_AggregateComplianceCount";

export const _AggregateComplianceCountList: _List_ = {
  type: "list",
  member: {
    shape: _AggregateComplianceCount
  }
};

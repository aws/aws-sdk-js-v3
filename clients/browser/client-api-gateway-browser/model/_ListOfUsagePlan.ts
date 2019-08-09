import { List as _List_ } from "@aws-sdk/types";
import { _UsagePlan } from "./_UsagePlan";

export const _ListOfUsagePlan: _List_ = {
  type: "list",
  member: {
    shape: _UsagePlan
  }
};

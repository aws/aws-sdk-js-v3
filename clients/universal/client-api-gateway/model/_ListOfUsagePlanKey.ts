import { List as _List_ } from "@aws-sdk/types";
import { _UsagePlanKey } from "./_UsagePlanKey";

export const _ListOfUsagePlanKey: _List_ = {
  type: "list",
  member: {
    shape: _UsagePlanKey
  }
};

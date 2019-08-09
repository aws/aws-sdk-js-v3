import { List as _List_ } from "@aws-sdk/types";
import { _IndexFieldStatus } from "./_IndexFieldStatus";

export const _IndexFieldStatusList: _List_ = {
  type: "list",
  member: {
    shape: _IndexFieldStatus
  }
};

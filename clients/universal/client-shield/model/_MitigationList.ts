import { List as _List_ } from "@aws-sdk/types";
import { _Mitigation } from "./_Mitigation";

export const _MitigationList: _List_ = {
  type: "list",
  member: {
    shape: _Mitigation
  }
};

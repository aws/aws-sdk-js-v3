import { List as _List_ } from "@aws-sdk/types";
import { _AccountQuota } from "./_AccountQuota";

export const _AccountQuotaList: _List_ = {
  type: "list",
  member: {
    shape: _AccountQuota
  }
};

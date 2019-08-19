import { List as _List_ } from "@aws-sdk/types";
import { _ServiceQuota } from "./_ServiceQuota";

export const _ServiceQuotaListDefinition: _List_ = {
  type: "list",
  member: {
    shape: _ServiceQuota
  }
};

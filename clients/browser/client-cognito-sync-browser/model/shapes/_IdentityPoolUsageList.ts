import { List as _List_ } from "@aws-sdk/types";
import { _IdentityPoolUsage } from "./_IdentityPoolUsage";

export const _IdentityPoolUsageList: _List_ = {
  type: "list",
  member: {
    shape: _IdentityPoolUsage
  }
};

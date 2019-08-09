import { List as _List_ } from "@aws-sdk/types";
import { _RulesPackage } from "./_RulesPackage";

export const _RulesPackageList: _List_ = {
  type: "list",
  member: {
    shape: _RulesPackage
  }
};

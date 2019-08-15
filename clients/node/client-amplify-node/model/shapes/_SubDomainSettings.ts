import { List as _List_ } from "@aws-sdk/types";
import { _SubDomainSetting } from "./_SubDomainSetting";

export const _SubDomainSettings: _List_ = {
  type: "list",
  member: {
    shape: _SubDomainSetting
  }
};

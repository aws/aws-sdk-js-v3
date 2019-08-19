import { List as _List_ } from "@aws-sdk/types";
import { _SubDomain } from "./_SubDomain";

export const _SubDomains: _List_ = {
  type: "list",
  member: {
    shape: _SubDomain
  }
};

import { List as _List_ } from "@aws-sdk/types";
import { _PolicyGrantingServiceAccess } from "./_PolicyGrantingServiceAccess";

export const _policyGrantingServiceAccessListType: _List_ = {
  type: "list",
  member: {
    shape: _PolicyGrantingServiceAccess
  }
};

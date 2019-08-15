import { List as _List_ } from "@aws-sdk/types";
import { _EnabledServicePrincipal } from "./_EnabledServicePrincipal";

export const _EnabledServicePrincipals: _List_ = {
  type: "list",
  member: {
    shape: _EnabledServicePrincipal
  }
};

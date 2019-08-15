import { List as _List_ } from "@aws-sdk/types";
import { _ClientVpnAuthentication } from "./_ClientVpnAuthentication";

export const _ClientVpnAuthenticationList: _List_ = {
  type: "list",
  member: {
    shape: _ClientVpnAuthentication,
    locationName: "item"
  }
};

import { List as _List_ } from "@aws-sdk/types";
import { _AllowedPrincipal } from "./_AllowedPrincipal";

export const _AllowedPrincipalSet: _List_ = {
  type: "list",
  member: {
    shape: _AllowedPrincipal,
    locationName: "item"
  }
};

import { List as _List_ } from "@aws-sdk/types";
import { _PrincipalIdFormat } from "./_PrincipalIdFormat";

export const _PrincipalIdFormatList: _List_ = {
  type: "list",
  member: {
    shape: _PrincipalIdFormat,
    locationName: "item"
  }
};

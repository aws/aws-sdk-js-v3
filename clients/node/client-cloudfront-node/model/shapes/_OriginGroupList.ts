import { List as _List_ } from "@aws-sdk/types";
import { _OriginGroup } from "./_OriginGroup";

export const _OriginGroupList: _List_ = {
  type: "list",
  member: {
    shape: _OriginGroup,
    locationName: "OriginGroup"
  }
};

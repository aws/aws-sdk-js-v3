import { List as _List_ } from "@aws-sdk/types";
import { _Origin } from "./_Origin";

export const _OriginList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _Origin,
    locationName: "Origin"
  }
};

import { List as _List_ } from "@aws-sdk/types";
import { _ServiceTypeDetail } from "./_ServiceTypeDetail";

export const _ServiceTypeDetailSet: _List_ = {
  type: "list",
  member: {
    shape: _ServiceTypeDetail,
    locationName: "item"
  }
};

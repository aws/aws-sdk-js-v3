import { List as _List_ } from "@aws-sdk/types";
import { _ServiceDetail } from "./_ServiceDetail";

export const _ServiceDetailSet: _List_ = {
  type: "list",
  member: {
    shape: _ServiceDetail,
    locationName: "item"
  }
};

import { List as _List_ } from "@aws-sdk/types";
import { _ServiceUpdate } from "./_ServiceUpdate";

export const _ServiceUpdateList: _List_ = {
  type: "list",
  member: {
    shape: _ServiceUpdate,
    locationName: "ServiceUpdate"
  }
};

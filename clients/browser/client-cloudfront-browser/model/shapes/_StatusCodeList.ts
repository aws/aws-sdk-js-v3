import { List as _List_ } from "@aws-sdk/types";

export const _StatusCodeList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: {
      type: "integer"
    },
    locationName: "StatusCode"
  }
};

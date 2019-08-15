import { List as _List_ } from "@aws-sdk/types";
import { _Trail } from "./_Trail";

export const _TrailList: _List_ = {
  type: "list",
  member: {
    shape: _Trail
  }
};

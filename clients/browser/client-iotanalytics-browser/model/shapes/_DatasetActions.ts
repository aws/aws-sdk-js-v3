import { List as _List_ } from "@aws-sdk/types";
import { _DatasetAction } from "./_DatasetAction";

export const _DatasetActions: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _DatasetAction
  }
};

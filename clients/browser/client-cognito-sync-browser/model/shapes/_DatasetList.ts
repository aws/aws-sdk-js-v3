import { List as _List_ } from "@aws-sdk/types";
import { _Dataset } from "./_Dataset";

export const _DatasetList: _List_ = {
  type: "list",
  member: {
    shape: _Dataset
  }
};

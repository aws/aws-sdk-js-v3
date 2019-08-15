import { List as _List_ } from "@aws-sdk/types";
import { _DatasetTrigger } from "./_DatasetTrigger";

export const _DatasetTriggers: _List_ = {
  type: "list",
  member: {
    shape: _DatasetTrigger
  }
};

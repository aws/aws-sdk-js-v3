import { List as _List_ } from "@aws-sdk/types";
import { _Record } from "./_Record";

export const _Records: _List_ = {
  type: "list",
  member: {
    shape: _Record
  }
};

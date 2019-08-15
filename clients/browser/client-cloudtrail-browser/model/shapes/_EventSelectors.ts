import { List as _List_ } from "@aws-sdk/types";
import { _EventSelector } from "./_EventSelector";

export const _EventSelectors: _List_ = {
  type: "list",
  member: {
    shape: _EventSelector
  }
};

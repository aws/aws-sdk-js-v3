import { List as _List_ } from "@aws-sdk/types";
import { _JobInput } from "./_JobInput";

export const _JobInputs: _List_ = {
  type: "list",
  member: {
    shape: _JobInput
  }
};

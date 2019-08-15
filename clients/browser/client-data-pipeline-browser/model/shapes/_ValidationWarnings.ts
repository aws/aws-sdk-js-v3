import { List as _List_ } from "@aws-sdk/types";
import { _ValidationWarning } from "./_ValidationWarning";

export const _ValidationWarnings: _List_ = {
  type: "list",
  member: {
    shape: _ValidationWarning
  }
};

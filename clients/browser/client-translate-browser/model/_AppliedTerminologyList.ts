import { List as _List_ } from "@aws-sdk/types";
import { _AppliedTerminology } from "./_AppliedTerminology";

export const _AppliedTerminologyList: _List_ = {
  type: "list",
  member: {
    shape: _AppliedTerminology
  }
};

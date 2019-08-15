import { List as _List_ } from "@aws-sdk/types";
import { _UsageInstruction } from "./_UsageInstruction";

export const _UsageInstructions: _List_ = {
  type: "list",
  member: {
    shape: _UsageInstruction
  }
};

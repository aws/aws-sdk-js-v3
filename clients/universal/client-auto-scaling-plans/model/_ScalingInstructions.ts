import { List as _List_ } from "@aws-sdk/types";
import { _ScalingInstruction } from "./_ScalingInstruction";

export const _ScalingInstructions: _List_ = {
  type: "list",
  member: {
    shape: _ScalingInstruction
  }
};

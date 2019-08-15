import { List as _List_ } from "@aws-sdk/types";
import { _SynthesisTask } from "./_SynthesisTask";

export const _SynthesisTasks: _List_ = {
  type: "list",
  member: {
    shape: _SynthesisTask
  }
};

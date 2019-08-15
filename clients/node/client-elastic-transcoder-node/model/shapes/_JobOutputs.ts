import { List as _List_ } from "@aws-sdk/types";
import { _JobOutput } from "./_JobOutput";

export const _JobOutputs: _List_ = {
  type: "list",
  member: {
    shape: _JobOutput
  }
};

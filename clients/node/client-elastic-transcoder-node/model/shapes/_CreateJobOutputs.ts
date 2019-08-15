import { List as _List_ } from "@aws-sdk/types";
import { _CreateJobOutput } from "./_CreateJobOutput";

export const _CreateJobOutputs: _List_ = {
  type: "list",
  member: {
    shape: _CreateJobOutput
  }
};

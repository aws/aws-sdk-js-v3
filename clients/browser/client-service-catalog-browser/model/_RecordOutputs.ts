import { List as _List_ } from "@aws-sdk/types";
import { _RecordOutput } from "./_RecordOutput";

export const _RecordOutputs: _List_ = {
  type: "list",
  member: {
    shape: _RecordOutput
  }
};

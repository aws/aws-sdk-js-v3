import { List as _List_ } from "@aws-sdk/types";
import { _PipelineIdName } from "./_PipelineIdName";

export const _pipelineList: _List_ = {
  type: "list",
  member: {
    shape: _PipelineIdName
  }
};

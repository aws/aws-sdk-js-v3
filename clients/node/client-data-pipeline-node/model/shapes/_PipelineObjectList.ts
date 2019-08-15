import { List as _List_ } from "@aws-sdk/types";
import { _PipelineObject } from "./_PipelineObject";

export const _PipelineObjectList: _List_ = {
  type: "list",
  member: {
    shape: _PipelineObject
  }
};

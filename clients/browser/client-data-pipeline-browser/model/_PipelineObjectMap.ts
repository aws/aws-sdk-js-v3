import { Map as _Map_ } from "@aws-sdk/types";
import { _PipelineObject } from "./_PipelineObject";

export const _PipelineObjectMap: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string",
      min: 1
    }
  },
  value: {
    shape: _PipelineObject
  }
};

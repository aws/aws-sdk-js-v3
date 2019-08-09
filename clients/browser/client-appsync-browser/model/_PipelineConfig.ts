import { _FunctionsIds } from "./_FunctionsIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PipelineConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    functions: {
      shape: _FunctionsIds
    }
  }
};

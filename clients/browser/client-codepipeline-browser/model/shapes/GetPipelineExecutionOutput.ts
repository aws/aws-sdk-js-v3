import { _PipelineExecution } from "./_PipelineExecution";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPipelineExecutionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    pipelineExecution: {
      shape: _PipelineExecution
    }
  }
};

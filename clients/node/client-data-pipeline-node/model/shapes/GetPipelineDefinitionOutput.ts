import { _PipelineObjectList } from "./_PipelineObjectList";
import { _ParameterObjectList } from "./_ParameterObjectList";
import { _ParameterValueList } from "./_ParameterValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPipelineDefinitionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    pipelineObjects: {
      shape: _PipelineObjectList
    },
    parameterObjects: {
      shape: _ParameterObjectList
    },
    parameterValues: {
      shape: _ParameterValueList
    }
  }
};

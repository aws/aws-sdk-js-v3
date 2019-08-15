import { _PipelineObjectList } from "./_PipelineObjectList";
import { _ParameterObjectList } from "./_ParameterObjectList";
import { _ParameterValueList } from "./_ParameterValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ValidatePipelineDefinitionInput: _Structure_ = {
  type: "structure",
  required: ["pipelineId", "pipelineObjects"],
  members: {
    pipelineId: {
      shape: {
        type: "string",
        min: 1
      }
    },
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

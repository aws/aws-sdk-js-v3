import { _ParameterValueList } from "./_ParameterValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ActivatePipelineInput: _Structure_ = {
  type: "structure",
  required: ["pipelineId"],
  members: {
    pipelineId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    parameterValues: {
      shape: _ParameterValueList
    },
    startTimestamp: {
      shape: {
        type: "timestamp"
      }
    }
  }
};

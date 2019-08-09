import { _ExecutionParameterValueList } from "./_ExecutionParameterValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ExecutionParameter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Type: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DefaultValues: {
      shape: _ExecutionParameterValueList
    }
  }
};

import { _ParameterRange } from "./_ParameterRange";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HyperParameterSpecification: _Structure_ = {
  type: "structure",
  required: ["Name", "Type"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    Range: {
      shape: _ParameterRange
    },
    IsTunable: {
      shape: {
        type: "boolean"
      }
    },
    IsRequired: {
      shape: {
        type: "boolean"
      }
    },
    DefaultValue: {
      shape: {
        type: "string"
      }
    }
  }
};

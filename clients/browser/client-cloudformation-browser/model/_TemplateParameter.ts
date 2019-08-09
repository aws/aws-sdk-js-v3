import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TemplateParameter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ParameterKey: {
      shape: {
        type: "string"
      }
    },
    DefaultValue: {
      shape: {
        type: "string"
      }
    },
    NoEcho: {
      shape: {
        type: "boolean"
      }
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

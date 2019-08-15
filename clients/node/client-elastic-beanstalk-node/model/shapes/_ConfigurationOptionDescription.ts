import { _ConfigurationOptionPossibleValues } from "./_ConfigurationOptionPossibleValues";
import { _OptionRestrictionRegex } from "./_OptionRestrictionRegex";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConfigurationOptionDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Namespace: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    DefaultValue: {
      shape: {
        type: "string"
      }
    },
    ChangeSeverity: {
      shape: {
        type: "string"
      }
    },
    UserDefined: {
      shape: {
        type: "boolean"
      }
    },
    ValueType: {
      shape: {
        type: "string"
      }
    },
    ValueOptions: {
      shape: _ConfigurationOptionPossibleValues
    },
    MinValue: {
      shape: {
        type: "integer"
      }
    },
    MaxValue: {
      shape: {
        type: "integer"
      }
    },
    MaxLength: {
      shape: {
        type: "integer"
      }
    },
    Regex: {
      shape: _OptionRestrictionRegex
    }
  }
};

import { _RuleParameterMap } from "./_RuleParameterMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Rule: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    Parameters: {
      shape: _RuleParameterMap
    }
  }
};

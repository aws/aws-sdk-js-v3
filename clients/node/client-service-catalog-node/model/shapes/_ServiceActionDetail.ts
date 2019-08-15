import { _ServiceActionSummary } from "./_ServiceActionSummary";
import { _ServiceActionDefinitionMap } from "./_ServiceActionDefinitionMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServiceActionDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceActionSummary: {
      shape: _ServiceActionSummary
    },
    Definition: {
      shape: _ServiceActionDefinitionMap
    }
  }
};

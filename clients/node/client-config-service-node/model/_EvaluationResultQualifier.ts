import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EvaluationResultQualifier: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigRuleName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

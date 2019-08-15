import { _ResourceTargetDefinition } from "./_ResourceTargetDefinition";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceChangeDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Target: {
      shape: _ResourceTargetDefinition
    },
    Evaluation: {
      shape: {
        type: "string"
      }
    },
    ChangeSource: {
      shape: {
        type: "string"
      }
    },
    CausingEntity: {
      shape: {
        type: "string"
      }
    }
  }
};

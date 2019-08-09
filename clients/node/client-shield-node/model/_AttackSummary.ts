import { _AttackVectorDescriptionList } from "./_AttackVectorDescriptionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AttackSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AttackId: {
      shape: {
        type: "string"
      }
    },
    ResourceArn: {
      shape: {
        type: "string"
      }
    },
    StartTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndTime: {
      shape: {
        type: "timestamp"
      }
    },
    AttackVectors: {
      shape: _AttackVectorDescriptionList
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DBClusterMember: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBInstanceIdentifier: {
      shape: {
        type: "string"
      }
    },
    IsClusterWriter: {
      shape: {
        type: "boolean"
      }
    },
    DBClusterParameterGroupStatus: {
      shape: {
        type: "string"
      }
    },
    PromotionTier: {
      shape: {
        type: "integer"
      }
    }
  }
};

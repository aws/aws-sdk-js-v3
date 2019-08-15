import { _AssociationStatusAggregatedCount } from "./_AssociationStatusAggregatedCount";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AssociationOverview: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Status: {
      shape: {
        type: "string"
      }
    },
    DetailedStatus: {
      shape: {
        type: "string"
      }
    },
    AssociationStatusAggregatedCount: {
      shape: _AssociationStatusAggregatedCount
    }
  }
};

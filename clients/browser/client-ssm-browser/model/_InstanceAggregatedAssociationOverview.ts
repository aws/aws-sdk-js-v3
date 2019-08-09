import { _InstanceAssociationStatusAggregatedCount } from "./_InstanceAssociationStatusAggregatedCount";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceAggregatedAssociationOverview: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DetailedStatus: {
      shape: {
        type: "string"
      }
    },
    InstanceAssociationStatusAggregatedCount: {
      shape: _InstanceAssociationStatusAggregatedCount
    }
  }
};

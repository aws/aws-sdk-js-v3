import { _CapacityReservationIdSet } from "./_CapacityReservationIdSet";
import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCapacityReservationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CapacityReservationIds: {
      shape: _CapacityReservationIdSet,
      locationName: "CapacityReservationId"
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};

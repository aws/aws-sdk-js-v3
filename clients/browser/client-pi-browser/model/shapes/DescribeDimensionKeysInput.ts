import { _DimensionGroup } from "./_DimensionGroup";
import { _MetricQueryFilterMap } from "./_MetricQueryFilterMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDimensionKeysInput: _Structure_ = {
  type: "structure",
  required: [
    "ServiceType",
    "Identifier",
    "StartTime",
    "EndTime",
    "Metric",
    "GroupBy"
  ],
  members: {
    ServiceType: {
      shape: {
        type: "string"
      }
    },
    Identifier: {
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
    Metric: {
      shape: {
        type: "string"
      }
    },
    PeriodInSeconds: {
      shape: {
        type: "integer"
      }
    },
    GroupBy: {
      shape: _DimensionGroup
    },
    PartitionBy: {
      shape: _DimensionGroup
    },
    Filter: {
      shape: _MetricQueryFilterMap
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

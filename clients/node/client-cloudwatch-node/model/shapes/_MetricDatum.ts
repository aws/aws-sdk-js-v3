import { _Dimensions } from "./_Dimensions";
import { _StatisticSet } from "./_StatisticSet";
import { _Values } from "./_Values";
import { _Counts } from "./_Counts";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MetricDatum: _Structure_ = {
  type: "structure",
  required: ["MetricName"],
  members: {
    MetricName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Dimensions: {
      shape: _Dimensions
    },
    Timestamp: {
      shape: {
        type: "timestamp"
      }
    },
    Value: {
      shape: {
        type: "float"
      }
    },
    StatisticValues: {
      shape: _StatisticSet
    },
    Values: {
      shape: _Values
    },
    Counts: {
      shape: _Counts
    },
    Unit: {
      shape: {
        type: "string"
      }
    },
    StorageResolution: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};

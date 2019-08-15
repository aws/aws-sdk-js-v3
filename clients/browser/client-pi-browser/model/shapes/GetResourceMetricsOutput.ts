import { _MetricKeyDataPointsList } from "./_MetricKeyDataPointsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetResourceMetricsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AlignedStartTime: {
      shape: {
        type: "timestamp"
      }
    },
    AlignedEndTime: {
      shape: {
        type: "timestamp"
      }
    },
    Identifier: {
      shape: {
        type: "string"
      }
    },
    MetricList: {
      shape: _MetricKeyDataPointsList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

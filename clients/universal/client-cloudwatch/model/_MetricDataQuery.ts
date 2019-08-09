import { _MetricStat } from "./_MetricStat";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MetricDataQuery: _Structure_ = {
  type: "structure",
  required: ["Id"],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MetricStat: {
      shape: _MetricStat
    },
    Expression: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Label: {
      shape: {
        type: "string"
      }
    },
    ReturnData: {
      shape: {
        type: "boolean"
      }
    }
  }
};

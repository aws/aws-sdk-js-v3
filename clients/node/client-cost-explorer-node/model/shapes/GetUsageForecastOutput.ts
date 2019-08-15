import { _MetricValue } from "./_MetricValue";
import { _ForecastResultsByTime } from "./_ForecastResultsByTime";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUsageForecastOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Total: {
      shape: _MetricValue
    },
    ForecastResultsByTime: {
      shape: _ForecastResultsByTime
    }
  }
};

import { _ResponseResourceMetricKey } from "./_ResponseResourceMetricKey";
import { _DataPointsList } from "./_DataPointsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MetricKeyDataPoints: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Key: {
      shape: _ResponseResourceMetricKey
    },
    DataPoints: {
      shape: _DataPointsList
    }
  }
};

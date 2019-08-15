import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMetricWidgetImageInput: _Structure_ = {
  type: "structure",
  required: ["MetricWidget"],
  members: {
    MetricWidget: {
      shape: {
        type: "string"
      }
    },
    OutputFormat: {
      shape: {
        type: "string"
      }
    }
  }
};

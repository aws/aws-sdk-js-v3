import { _Dimensions } from "./_Dimensions";
import { _AnomalyDetectorConfiguration } from "./_AnomalyDetectorConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutAnomalyDetectorInput: _Structure_ = {
  type: "structure",
  required: ["Namespace", "MetricName", "Stat"],
  members: {
    Namespace: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MetricName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Dimensions: {
      shape: _Dimensions
    },
    Stat: {
      shape: {
        type: "string"
      }
    },
    Configuration: {
      shape: _AnomalyDetectorConfiguration
    }
  }
};

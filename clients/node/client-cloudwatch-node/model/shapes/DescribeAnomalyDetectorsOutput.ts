import { _AnomalyDetectors } from "./_AnomalyDetectors";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAnomalyDetectorsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AnomalyDetectors: {
      shape: _AnomalyDetectors
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

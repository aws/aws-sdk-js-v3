import { _Detector } from "./_Detector";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDetectorOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    detector: {
      shape: _Detector
    }
  }
};

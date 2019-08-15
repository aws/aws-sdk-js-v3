import { _DetectorModel } from "./_DetectorModel";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDetectorModelOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    detectorModel: {
      shape: _DetectorModel
    }
  }
};

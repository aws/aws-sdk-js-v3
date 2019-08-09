import { _DetectorModelConfiguration } from "./_DetectorModelConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDetectorModelOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    detectorModelConfiguration: {
      shape: _DetectorModelConfiguration
    }
  }
};

import { _UpdateDetectorRequests } from "./_UpdateDetectorRequests";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchUpdateDetectorInput: _Structure_ = {
  type: "structure",
  required: ["detectors"],
  members: {
    detectors: {
      shape: _UpdateDetectorRequests
    }
  }
};

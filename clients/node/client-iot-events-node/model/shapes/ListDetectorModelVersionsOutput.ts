import { _DetectorModelVersionSummaries } from "./_DetectorModelVersionSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDetectorModelVersionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    detectorModelVersionSummaries: {
      shape: _DetectorModelVersionSummaries
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

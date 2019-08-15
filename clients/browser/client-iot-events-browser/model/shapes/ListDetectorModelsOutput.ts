import { _DetectorModelSummaries } from "./_DetectorModelSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDetectorModelsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    detectorModelSummaries: {
      shape: _DetectorModelSummaries
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

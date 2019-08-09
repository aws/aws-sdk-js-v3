import { _DetectorSummaries } from "./_DetectorSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDetectorsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    detectorSummaries: {
      shape: _DetectorSummaries
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

import { _DetectorIds } from "./_DetectorIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDetectorsOutput: _Structure_ = {
  type: "structure",
  required: ["DetectorIds"],
  members: {
    DetectorIds: {
      shape: _DetectorIds,
      locationName: "detectorIds"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};

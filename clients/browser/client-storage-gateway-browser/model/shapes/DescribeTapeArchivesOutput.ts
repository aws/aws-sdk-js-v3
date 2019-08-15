import { _TapeArchives } from "./_TapeArchives";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTapeArchivesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TapeArchives: {
      shape: _TapeArchives
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

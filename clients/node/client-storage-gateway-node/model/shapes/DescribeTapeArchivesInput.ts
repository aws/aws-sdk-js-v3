import { _TapeARNs } from "./_TapeARNs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTapeArchivesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TapeARNs: {
      shape: _TapeARNs
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Limit: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};

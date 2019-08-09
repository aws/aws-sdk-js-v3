import { _MergeOptions } from "./_MergeOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMergeOptionsOutput: _Structure_ = {
  type: "structure",
  required: [
    "mergeOptions",
    "sourceCommitId",
    "destinationCommitId",
    "baseCommitId"
  ],
  members: {
    mergeOptions: {
      shape: _MergeOptions
    },
    sourceCommitId: {
      shape: {
        type: "string"
      }
    },
    destinationCommitId: {
      shape: {
        type: "string"
      }
    },
    baseCommitId: {
      shape: {
        type: "string"
      }
    }
  }
};

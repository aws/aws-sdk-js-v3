import { _ConflictMetadata } from "./_ConflictMetadata";
import { _MergeHunks } from "./_MergeHunks";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Conflict: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    conflictMetadata: {
      shape: _ConflictMetadata
    },
    mergeHunks: {
      shape: _MergeHunks
    }
  }
};

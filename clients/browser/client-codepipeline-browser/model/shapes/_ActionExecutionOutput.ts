import { _ArtifactDetailList } from "./_ArtifactDetailList";
import { _ActionExecutionResult } from "./_ActionExecutionResult";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActionExecutionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    outputArtifacts: {
      shape: _ArtifactDetailList
    },
    executionResult: {
      shape: _ActionExecutionResult
    }
  }
};

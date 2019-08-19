import { _ArtifactRevisionList } from "./_ArtifactRevisionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PipelineExecution: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    pipelineName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    pipelineVersion: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    pipelineExecutionId: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    artifactRevisions: {
      shape: _ArtifactRevisionList
    }
  }
};

import { _ArtifactStore } from "./_ArtifactStore";
import { _ArtifactStoreMap } from "./_ArtifactStoreMap";
import { _PipelineStageDeclarationList } from "./_PipelineStageDeclarationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PipelineDeclaration: _Structure_ = {
  type: "structure",
  required: ["name", "roleArn", "stages"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    roleArn: {
      shape: {
        type: "string"
      }
    },
    artifactStore: {
      shape: _ArtifactStore
    },
    artifactStores: {
      shape: _ArtifactStoreMap
    },
    stages: {
      shape: _PipelineStageDeclarationList
    },
    version: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};

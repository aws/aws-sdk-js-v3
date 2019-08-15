import { _ResourceMetadata } from "./_ResourceMetadata";
import { _MeshSpec } from "./_MeshSpec";
import { _MeshStatus } from "./_MeshStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MeshData: _Structure_ = {
  type: "structure",
  required: ["meshName", "metadata", "spec", "status"],
  members: {
    meshName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    metadata: {
      shape: _ResourceMetadata
    },
    spec: {
      shape: _MeshSpec
    },
    status: {
      shape: _MeshStatus
    }
  }
};

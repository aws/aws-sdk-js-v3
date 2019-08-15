import { _MeshSpec } from "./_MeshSpec";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateMeshInput: _Structure_ = {
  type: "structure",
  required: ["meshName"],
  members: {
    clientToken: {
      shape: {
        type: "string"
      }
    },
    meshName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    spec: {
      shape: _MeshSpec
    },
    tags: {
      shape: _TagList
    }
  }
};

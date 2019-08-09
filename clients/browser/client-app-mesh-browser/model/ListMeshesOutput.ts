import { _MeshList } from "./_MeshList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListMeshesOutput: _Structure_ = {
  type: "structure",
  required: ["meshes"],
  members: {
    meshes: {
      shape: _MeshList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

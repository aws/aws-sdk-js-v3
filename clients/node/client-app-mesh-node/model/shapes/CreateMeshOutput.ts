import { _MeshData } from "./_MeshData";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateMeshOutput: _Structure_ = {
  type: "structure",
  required: ["mesh"],
  members: {
    mesh: {
      shape: _MeshData
    }
  },
  payload: "mesh"
};

import { _MeshSpec } from "./_MeshSpec";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateMeshInput: _Structure_ = {
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
      },
      location: "uri",
      locationName: "meshName"
    },
    spec: {
      shape: _MeshSpec
    }
  }
};

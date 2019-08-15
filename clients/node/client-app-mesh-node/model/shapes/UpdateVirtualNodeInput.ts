import { _VirtualNodeSpec } from "./_VirtualNodeSpec";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateVirtualNodeInput: _Structure_ = {
  type: "structure",
  required: ["meshName", "spec", "virtualNodeName"],
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
      shape: _VirtualNodeSpec
    },
    virtualNodeName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "virtualNodeName"
    }
  }
};

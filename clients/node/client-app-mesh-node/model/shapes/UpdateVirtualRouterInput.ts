import { _VirtualRouterSpec } from "./_VirtualRouterSpec";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateVirtualRouterInput: _Structure_ = {
  type: "structure",
  required: ["meshName", "spec", "virtualRouterName"],
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
      shape: _VirtualRouterSpec
    },
    virtualRouterName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "virtualRouterName"
    }
  }
};

import { _VirtualRouterSpec } from "./_VirtualRouterSpec";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateVirtualRouterInput: _Structure_ = {
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
    tags: {
      shape: _TagList
    },
    virtualRouterName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

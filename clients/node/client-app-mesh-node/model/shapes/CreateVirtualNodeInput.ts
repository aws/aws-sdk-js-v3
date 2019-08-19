import { _VirtualNodeSpec } from "./_VirtualNodeSpec";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateVirtualNodeInput: _Structure_ = {
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
    tags: {
      shape: _TagList
    },
    virtualNodeName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

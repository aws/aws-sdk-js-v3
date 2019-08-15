import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteVirtualNodeInput: _Structure_ = {
  type: "structure",
  required: ["meshName", "virtualNodeName"],
  members: {
    meshName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "meshName"
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

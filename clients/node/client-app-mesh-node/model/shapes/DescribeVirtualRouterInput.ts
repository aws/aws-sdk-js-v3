import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVirtualRouterInput: _Structure_ = {
  type: "structure",
  required: ["meshName", "virtualRouterName"],
  members: {
    meshName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "meshName"
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

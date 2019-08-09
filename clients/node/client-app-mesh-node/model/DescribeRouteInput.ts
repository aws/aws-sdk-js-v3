import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRouteInput: _Structure_ = {
  type: "structure",
  required: ["meshName", "routeName", "virtualRouterName"],
  members: {
    meshName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "meshName"
    },
    routeName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "routeName"
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

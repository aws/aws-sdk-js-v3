import { _RouteSpec } from "./_RouteSpec";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateRouteInput: _Structure_ = {
  type: "structure",
  required: ["meshName", "routeName", "spec", "virtualRouterName"],
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
    routeName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "routeName"
    },
    spec: {
      shape: _RouteSpec
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

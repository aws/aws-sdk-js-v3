import { _RouteSpec } from "./_RouteSpec";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRouteInput: _Structure_ = {
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
      }
    },
    spec: {
      shape: _RouteSpec
    },
    tags: {
      shape: _TagList
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

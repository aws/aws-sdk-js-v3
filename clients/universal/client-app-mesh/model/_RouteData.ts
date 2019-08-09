import { _ResourceMetadata } from "./_ResourceMetadata";
import { _RouteSpec } from "./_RouteSpec";
import { _RouteStatus } from "./_RouteStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RouteData: _Structure_ = {
  type: "structure",
  required: [
    "meshName",
    "metadata",
    "routeName",
    "spec",
    "status",
    "virtualRouterName"
  ],
  members: {
    meshName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    metadata: {
      shape: _ResourceMetadata
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
    status: {
      shape: _RouteStatus
    },
    virtualRouterName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

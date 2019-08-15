import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RouteRef: _Structure_ = {
  type: "structure",
  required: ["arn", "meshName", "routeName", "virtualRouterName"],
  members: {
    arn: {
      shape: {
        type: "string"
      }
    },
    meshName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    routeName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    virtualRouterName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

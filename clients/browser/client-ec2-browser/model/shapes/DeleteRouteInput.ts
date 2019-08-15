import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteRouteInput: _Structure_ = {
  type: "structure",
  required: ["RouteTableId"],
  members: {
    DestinationCidrBlock: {
      shape: {
        type: "string"
      },
      locationName: "destinationCidrBlock"
    },
    DestinationIpv6CidrBlock: {
      shape: {
        type: "string"
      },
      locationName: "destinationIpv6CidrBlock"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    RouteTableId: {
      shape: {
        type: "string"
      },
      locationName: "routeTableId"
    }
  }
};

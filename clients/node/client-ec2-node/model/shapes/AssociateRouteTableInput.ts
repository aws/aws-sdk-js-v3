import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateRouteTableInput: _Structure_ = {
  type: "structure",
  required: ["RouteTableId", "SubnetId"],
  members: {
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
    },
    SubnetId: {
      shape: {
        type: "string"
      },
      locationName: "subnetId"
    }
  }
};

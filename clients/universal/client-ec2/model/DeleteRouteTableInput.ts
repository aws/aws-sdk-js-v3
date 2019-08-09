import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteRouteTableInput: _Structure_ = {
  type: "structure",
  required: ["RouteTableId"],
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
    }
  }
};

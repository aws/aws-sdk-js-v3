import { Structure as _Structure_ } from "@aws-sdk/types";

export const ReplaceRouteTableAssociationInput: _Structure_ = {
  type: "structure",
  required: ["AssociationId", "RouteTableId"],
  members: {
    AssociationId: {
      shape: {
        type: "string"
      },
      locationName: "associationId"
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

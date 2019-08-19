import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RouteTableAssociation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Main: {
      shape: {
        type: "boolean"
      },
      locationName: "main"
    },
    RouteTableAssociationId: {
      shape: {
        type: "string"
      },
      locationName: "routeTableAssociationId"
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

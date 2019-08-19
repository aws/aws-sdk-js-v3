import { _RouteTableAssociationList } from "./_RouteTableAssociationList";
import { _PropagatingVgwList } from "./_PropagatingVgwList";
import { _RouteList } from "./_RouteList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RouteTable: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Associations: {
      shape: _RouteTableAssociationList,
      locationName: "associationSet"
    },
    PropagatingVgws: {
      shape: _PropagatingVgwList,
      locationName: "propagatingVgwSet"
    },
    RouteTableId: {
      shape: {
        type: "string"
      },
      locationName: "routeTableId"
    },
    Routes: {
      shape: _RouteList,
      locationName: "routeSet"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    },
    VpcId: {
      shape: {
        type: "string"
      },
      locationName: "vpcId"
    },
    OwnerId: {
      shape: {
        type: "string"
      },
      locationName: "ownerId"
    }
  }
};

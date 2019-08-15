import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TransitGatewayRouteTable: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TransitGatewayRouteTableId: {
      shape: {
        type: "string"
      },
      locationName: "transitGatewayRouteTableId"
    },
    TransitGatewayId: {
      shape: {
        type: "string"
      },
      locationName: "transitGatewayId"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    },
    DefaultAssociationRouteTable: {
      shape: {
        type: "boolean"
      },
      locationName: "defaultAssociationRouteTable"
    },
    DefaultPropagationRouteTable: {
      shape: {
        type: "boolean"
      },
      locationName: "defaultPropagationRouteTable"
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "creationTime"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    }
  }
};

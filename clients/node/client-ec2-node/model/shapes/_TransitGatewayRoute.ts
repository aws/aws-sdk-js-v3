import { _TransitGatewayRouteAttachmentList } from "./_TransitGatewayRouteAttachmentList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TransitGatewayRoute: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DestinationCidrBlock: {
      shape: {
        type: "string"
      },
      locationName: "destinationCidrBlock"
    },
    TransitGatewayAttachments: {
      shape: _TransitGatewayRouteAttachmentList,
      locationName: "transitGatewayAttachments"
    },
    Type: {
      shape: {
        type: "string"
      },
      locationName: "type"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    }
  }
};

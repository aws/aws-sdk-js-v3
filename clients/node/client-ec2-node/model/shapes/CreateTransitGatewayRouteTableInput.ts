import { _TagSpecificationList } from "./_TagSpecificationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTransitGatewayRouteTableInput: _Structure_ = {
  type: "structure",
  required: ["TransitGatewayId"],
  members: {
    TransitGatewayId: {
      shape: {
        type: "string"
      }
    },
    TagSpecifications: {
      shape: _TagSpecificationList
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};

import { _VpnConnectionOptionsSpecification } from "./_VpnConnectionOptionsSpecification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateVpnConnectionInput: _Structure_ = {
  type: "structure",
  required: ["CustomerGatewayId", "Type"],
  members: {
    CustomerGatewayId: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    VpnGatewayId: {
      shape: {
        type: "string"
      }
    },
    TransitGatewayId: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    Options: {
      shape: _VpnConnectionOptionsSpecification,
      locationName: "options"
    }
  }
};

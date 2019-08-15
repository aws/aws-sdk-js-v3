import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DirectConnectGateway: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    directConnectGatewayId: {
      shape: {
        type: "string"
      }
    },
    directConnectGatewayName: {
      shape: {
        type: "string"
      }
    },
    amazonSideAsn: {
      shape: {
        type: "integer"
      }
    },
    ownerAccount: {
      shape: {
        type: "string"
      }
    },
    directConnectGatewayState: {
      shape: {
        type: "string"
      }
    },
    stateChangeError: {
      shape: {
        type: "string"
      }
    }
  }
};

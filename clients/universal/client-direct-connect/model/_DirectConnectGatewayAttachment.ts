import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DirectConnectGatewayAttachment: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    directConnectGatewayId: {
      shape: {
        type: "string"
      }
    },
    virtualInterfaceId: {
      shape: {
        type: "string"
      }
    },
    virtualInterfaceRegion: {
      shape: {
        type: "string"
      }
    },
    virtualInterfaceOwnerAccount: {
      shape: {
        type: "string"
      }
    },
    attachmentState: {
      shape: {
        type: "string"
      }
    },
    attachmentType: {
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

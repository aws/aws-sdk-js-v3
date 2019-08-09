import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteBGPPeerInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    virtualInterfaceId: {
      shape: {
        type: "string"
      }
    },
    asn: {
      shape: {
        type: "integer"
      }
    },
    customerAddress: {
      shape: {
        type: "string"
      }
    },
    bgpPeerId: {
      shape: {
        type: "string"
      }
    }
  }
};

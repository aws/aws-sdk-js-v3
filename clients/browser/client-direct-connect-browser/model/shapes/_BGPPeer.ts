import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BGPPeer: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    bgpPeerId: {
      shape: {
        type: "string"
      }
    },
    asn: {
      shape: {
        type: "integer"
      }
    },
    authKey: {
      shape: {
        type: "string"
      }
    },
    addressFamily: {
      shape: {
        type: "string"
      }
    },
    amazonAddress: {
      shape: {
        type: "string"
      }
    },
    customerAddress: {
      shape: {
        type: "string"
      }
    },
    bgpPeerState: {
      shape: {
        type: "string"
      }
    },
    bgpStatus: {
      shape: {
        type: "string"
      }
    },
    awsDeviceV2: {
      shape: {
        type: "string"
      }
    }
  }
};

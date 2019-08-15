import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NewBGPPeer: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    }
  }
};

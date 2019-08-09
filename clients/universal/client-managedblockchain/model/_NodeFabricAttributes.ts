import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NodeFabricAttributes: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PeerEndpoint: {
      shape: {
        type: "string"
      }
    },
    PeerEventEndpoint: {
      shape: {
        type: "string"
      }
    }
  }
};

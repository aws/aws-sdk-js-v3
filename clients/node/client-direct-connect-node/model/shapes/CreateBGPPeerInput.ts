import { _NewBGPPeer } from "./_NewBGPPeer";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateBGPPeerInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    virtualInterfaceId: {
      shape: {
        type: "string"
      }
    },
    newBGPPeer: {
      shape: _NewBGPPeer
    }
  }
};

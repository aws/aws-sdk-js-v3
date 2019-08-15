import { _OutputKeys } from "./_OutputKeys";
import { _HlsContentProtection } from "./_HlsContentProtection";
import { _PlayReadyDrm } from "./_PlayReadyDrm";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Playlist: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Format: {
      shape: {
        type: "string"
      }
    },
    OutputKeys: {
      shape: _OutputKeys
    },
    HlsContentProtection: {
      shape: _HlsContentProtection
    },
    PlayReadyDrm: {
      shape: _PlayReadyDrm
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    StatusDetail: {
      shape: {
        type: "string"
      }
    }
  }
};

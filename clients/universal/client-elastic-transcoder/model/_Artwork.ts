import { _Encryption } from "./_Encryption";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Artwork: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InputKey: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxWidth: {
      shape: {
        type: "string"
      }
    },
    MaxHeight: {
      shape: {
        type: "string"
      }
    },
    SizingPolicy: {
      shape: {
        type: "string"
      }
    },
    PaddingPolicy: {
      shape: {
        type: "string"
      }
    },
    AlbumArtFormat: {
      shape: {
        type: "string"
      }
    },
    Encryption: {
      shape: _Encryption
    }
  }
};

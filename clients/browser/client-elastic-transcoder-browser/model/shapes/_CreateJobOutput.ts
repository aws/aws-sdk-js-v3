import { _Encryption } from "./_Encryption";
import { _JobWatermarks } from "./_JobWatermarks";
import { _JobAlbumArt } from "./_JobAlbumArt";
import { _Composition } from "./_Composition";
import { _Captions } from "./_Captions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CreateJobOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Key: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ThumbnailPattern: {
      shape: {
        type: "string"
      }
    },
    ThumbnailEncryption: {
      shape: _Encryption
    },
    Rotate: {
      shape: {
        type: "string"
      }
    },
    PresetId: {
      shape: {
        type: "string"
      }
    },
    SegmentDuration: {
      shape: {
        type: "string"
      }
    },
    Watermarks: {
      shape: _JobWatermarks
    },
    AlbumArt: {
      shape: _JobAlbumArt
    },
    Composition: {
      shape: _Composition
    },
    Captions: {
      shape: _Captions
    },
    Encryption: {
      shape: _Encryption
    }
  }
};

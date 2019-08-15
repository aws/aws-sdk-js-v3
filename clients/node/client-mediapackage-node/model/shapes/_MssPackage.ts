import { _MssEncryption } from "./_MssEncryption";
import { _StreamSelection } from "./_StreamSelection";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MssPackage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Encryption: {
      shape: _MssEncryption,
      locationName: "encryption"
    },
    ManifestWindowSeconds: {
      shape: {
        type: "integer"
      },
      locationName: "manifestWindowSeconds"
    },
    SegmentDurationSeconds: {
      shape: {
        type: "integer"
      },
      locationName: "segmentDurationSeconds"
    },
    StreamSelection: {
      shape: _StreamSelection,
      locationName: "streamSelection"
    }
  }
};

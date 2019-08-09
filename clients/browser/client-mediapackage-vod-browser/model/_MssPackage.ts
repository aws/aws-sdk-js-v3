import { _MssEncryption } from "./_MssEncryption";
import { ___listOfMssManifest } from "./___listOfMssManifest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MssPackage: _Structure_ = {
  type: "structure",
  required: ["MssManifests"],
  members: {
    Encryption: {
      shape: _MssEncryption,
      locationName: "encryption"
    },
    MssManifests: {
      shape: ___listOfMssManifest,
      locationName: "mssManifests"
    },
    SegmentDurationSeconds: {
      shape: {
        type: "integer"
      },
      locationName: "segmentDurationSeconds"
    }
  }
};

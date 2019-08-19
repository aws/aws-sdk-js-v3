import { _HlsEncryption } from "./_HlsEncryption";
import { ___listOfHlsManifest } from "./___listOfHlsManifest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HlsPackage: _Structure_ = {
  type: "structure",
  required: ["HlsManifests"],
  members: {
    Encryption: {
      shape: _HlsEncryption,
      locationName: "encryption"
    },
    HlsManifests: {
      shape: ___listOfHlsManifest,
      locationName: "hlsManifests"
    },
    SegmentDurationSeconds: {
      shape: {
        type: "integer"
      },
      locationName: "segmentDurationSeconds"
    },
    UseAudioRenditionGroup: {
      shape: {
        type: "boolean"
      },
      locationName: "useAudioRenditionGroup"
    }
  }
};

import { _CmafEncryption } from "./_CmafEncryption";
import { ___listOfHlsManifest } from "./___listOfHlsManifest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CmafPackage: _Structure_ = {
  type: "structure",
  required: ["HlsManifests"],
  members: {
    Encryption: {
      shape: _CmafEncryption,
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
    }
  }
};

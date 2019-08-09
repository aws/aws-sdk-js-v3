import { ___listOfDashManifest } from "./___listOfDashManifest";
import { _DashEncryption } from "./_DashEncryption";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DashPackage: _Structure_ = {
  type: "structure",
  required: ["DashManifests"],
  members: {
    DashManifests: {
      shape: ___listOfDashManifest,
      locationName: "dashManifests"
    },
    Encryption: {
      shape: _DashEncryption,
      locationName: "encryption"
    },
    SegmentDurationSeconds: {
      shape: {
        type: "integer"
      },
      locationName: "segmentDurationSeconds"
    }
  }
};

import { _DestinationSettings } from "./_DestinationSettings";
import { _MsSmoothEncryptionSettings } from "./_MsSmoothEncryptionSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MsSmoothGroupSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AudioDeduplication: {
      shape: {
        type: "string"
      },
      locationName: "audioDeduplication"
    },
    Destination: {
      shape: {
        type: "string"
      },
      locationName: "destination"
    },
    DestinationSettings: {
      shape: _DestinationSettings,
      locationName: "destinationSettings"
    },
    Encryption: {
      shape: _MsSmoothEncryptionSettings,
      locationName: "encryption"
    },
    FragmentLength: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "fragmentLength"
    },
    ManifestEncoding: {
      shape: {
        type: "string"
      },
      locationName: "manifestEncoding"
    }
  }
};

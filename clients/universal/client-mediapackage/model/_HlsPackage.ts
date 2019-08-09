import { _AdTriggers } from "./_AdTriggers";
import { _HlsEncryption } from "./_HlsEncryption";
import { _StreamSelection } from "./_StreamSelection";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HlsPackage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AdMarkers: {
      shape: {
        type: "string"
      },
      locationName: "adMarkers"
    },
    AdTriggers: {
      shape: _AdTriggers,
      locationName: "adTriggers"
    },
    AdsOnDeliveryRestrictions: {
      shape: {
        type: "string"
      },
      locationName: "adsOnDeliveryRestrictions"
    },
    Encryption: {
      shape: _HlsEncryption,
      locationName: "encryption"
    },
    IncludeIframeOnlyStream: {
      shape: {
        type: "boolean"
      },
      locationName: "includeIframeOnlyStream"
    },
    PlaylistType: {
      shape: {
        type: "string"
      },
      locationName: "playlistType"
    },
    PlaylistWindowSeconds: {
      shape: {
        type: "integer"
      },
      locationName: "playlistWindowSeconds"
    },
    ProgramDateTimeIntervalSeconds: {
      shape: {
        type: "integer"
      },
      locationName: "programDateTimeIntervalSeconds"
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
    },
    UseAudioRenditionGroup: {
      shape: {
        type: "boolean"
      },
      locationName: "useAudioRenditionGroup"
    }
  }
};

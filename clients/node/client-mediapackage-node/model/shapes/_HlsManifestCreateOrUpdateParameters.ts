import { _AdTriggers } from "./_AdTriggers";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HlsManifestCreateOrUpdateParameters: _Structure_ = {
  type: "structure",
  required: ["Id"],
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
    Id: {
      shape: {
        type: "string"
      },
      locationName: "id"
    },
    IncludeIframeOnlyStream: {
      shape: {
        type: "boolean"
      },
      locationName: "includeIframeOnlyStream"
    },
    ManifestName: {
      shape: {
        type: "string"
      },
      locationName: "manifestName"
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
    }
  }
};

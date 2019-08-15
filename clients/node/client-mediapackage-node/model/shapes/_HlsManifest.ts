import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HlsManifest: _Structure_ = {
  type: "structure",
  required: ["Id"],
  members: {
    AdMarkers: {
      shape: {
        type: "string"
      },
      locationName: "adMarkers"
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
    },
    Url: {
      shape: {
        type: "string"
      },
      locationName: "url"
    }
  }
};

import { _StreamSelection } from "./_StreamSelection";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HlsManifest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AdMarkers: {
      shape: {
        type: "string"
      },
      locationName: "adMarkers"
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
    ProgramDateTimeIntervalSeconds: {
      shape: {
        type: "integer"
      },
      locationName: "programDateTimeIntervalSeconds"
    },
    RepeatExtXKey: {
      shape: {
        type: "boolean"
      },
      locationName: "repeatExtXKey"
    },
    StreamSelection: {
      shape: _StreamSelection,
      locationName: "streamSelection"
    }
  }
};

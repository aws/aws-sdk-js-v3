import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HlsSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AudioGroupId: {
      shape: {
        type: "string"
      },
      locationName: "audioGroupId"
    },
    AudioOnlyContainer: {
      shape: {
        type: "string"
      },
      locationName: "audioOnlyContainer"
    },
    AudioRenditionSets: {
      shape: {
        type: "string"
      },
      locationName: "audioRenditionSets"
    },
    AudioTrackType: {
      shape: {
        type: "string"
      },
      locationName: "audioTrackType"
    },
    IFrameOnlyManifest: {
      shape: {
        type: "string"
      },
      locationName: "iFrameOnlyManifest"
    },
    SegmentModifier: {
      shape: {
        type: "string"
      },
      locationName: "segmentModifier"
    }
  }
};

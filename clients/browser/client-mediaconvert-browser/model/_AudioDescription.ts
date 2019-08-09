import { _AudioNormalizationSettings } from "./_AudioNormalizationSettings";
import { _AudioCodecSettings } from "./_AudioCodecSettings";
import { _RemixSettings } from "./_RemixSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AudioDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AudioNormalizationSettings: {
      shape: _AudioNormalizationSettings,
      locationName: "audioNormalizationSettings"
    },
    AudioSourceName: {
      shape: {
        type: "string"
      },
      locationName: "audioSourceName"
    },
    AudioType: {
      shape: {
        type: "integer"
      },
      locationName: "audioType"
    },
    AudioTypeControl: {
      shape: {
        type: "string"
      },
      locationName: "audioTypeControl"
    },
    CodecSettings: {
      shape: _AudioCodecSettings,
      locationName: "codecSettings"
    },
    CustomLanguageCode: {
      shape: {
        type: "string",
        min: 3
      },
      locationName: "customLanguageCode"
    },
    LanguageCode: {
      shape: {
        type: "string"
      },
      locationName: "languageCode"
    },
    LanguageCodeControl: {
      shape: {
        type: "string"
      },
      locationName: "languageCodeControl"
    },
    RemixSettings: {
      shape: _RemixSettings,
      locationName: "remixSettings"
    },
    StreamName: {
      shape: {
        type: "string"
      },
      locationName: "streamName"
    }
  }
};

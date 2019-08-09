import { _AudioNormalizationSettings } from "./_AudioNormalizationSettings";
import { _AudioCodecSettings } from "./_AudioCodecSettings";
import { _RemixSettings } from "./_RemixSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AudioDescription: _Structure_ = {
  type: "structure",
  required: ["AudioSelectorName", "Name"],
  members: {
    AudioNormalizationSettings: {
      shape: _AudioNormalizationSettings,
      locationName: "audioNormalizationSettings"
    },
    AudioSelectorName: {
      shape: {
        type: "string"
      },
      locationName: "audioSelectorName"
    },
    AudioType: {
      shape: {
        type: "string"
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
    LanguageCode: {
      shape: {
        type: "string",
        min: 3
      },
      locationName: "languageCode"
    },
    LanguageCodeControl: {
      shape: {
        type: "string"
      },
      locationName: "languageCodeControl"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
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

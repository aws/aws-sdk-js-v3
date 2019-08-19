import { ___listOf__string } from "./___listOf__string";
import { _OutputSettings } from "./_OutputSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Output: _Structure_ = {
  type: "structure",
  required: ["OutputSettings"],
  members: {
    AudioDescriptionNames: {
      shape: ___listOf__string,
      locationName: "audioDescriptionNames"
    },
    CaptionDescriptionNames: {
      shape: ___listOf__string,
      locationName: "captionDescriptionNames"
    },
    OutputName: {
      shape: {
        type: "string",
        min: 1
      },
      locationName: "outputName"
    },
    OutputSettings: {
      shape: _OutputSettings,
      locationName: "outputSettings"
    },
    VideoDescriptionName: {
      shape: {
        type: "string"
      },
      locationName: "videoDescriptionName"
    }
  }
};

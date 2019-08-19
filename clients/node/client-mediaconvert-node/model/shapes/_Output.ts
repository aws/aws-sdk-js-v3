import { ___listOfAudioDescription } from "./___listOfAudioDescription";
import { ___listOfCaptionDescription } from "./___listOfCaptionDescription";
import { _ContainerSettings } from "./_ContainerSettings";
import { _OutputSettings } from "./_OutputSettings";
import { _VideoDescription } from "./_VideoDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Output: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AudioDescriptions: {
      shape: ___listOfAudioDescription,
      locationName: "audioDescriptions"
    },
    CaptionDescriptions: {
      shape: ___listOfCaptionDescription,
      locationName: "captionDescriptions"
    },
    ContainerSettings: {
      shape: _ContainerSettings,
      locationName: "containerSettings"
    },
    Extension: {
      shape: {
        type: "string"
      },
      locationName: "extension"
    },
    NameModifier: {
      shape: {
        type: "string",
        min: 1
      },
      locationName: "nameModifier"
    },
    OutputSettings: {
      shape: _OutputSettings,
      locationName: "outputSettings"
    },
    Preset: {
      shape: {
        type: "string"
      },
      locationName: "preset"
    },
    VideoDescription: {
      shape: _VideoDescription,
      locationName: "videoDescription"
    }
  }
};

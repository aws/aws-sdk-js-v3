import { ___listOfAudioDescription } from "./___listOfAudioDescription";
import { ___listOfCaptionDescriptionPreset } from "./___listOfCaptionDescriptionPreset";
import { _ContainerSettings } from "./_ContainerSettings";
import { _VideoDescription } from "./_VideoDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PresetSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AudioDescriptions: {
      shape: ___listOfAudioDescription,
      locationName: "audioDescriptions"
    },
    CaptionDescriptions: {
      shape: ___listOfCaptionDescriptionPreset,
      locationName: "captionDescriptions"
    },
    ContainerSettings: {
      shape: _ContainerSettings,
      locationName: "containerSettings"
    },
    VideoDescription: {
      shape: _VideoDescription,
      locationName: "videoDescription"
    }
  }
};

import { ___listOfAudioDescription } from "./___listOfAudioDescription";
import { _AvailBlanking } from "./_AvailBlanking";
import { _AvailConfiguration } from "./_AvailConfiguration";
import { _BlackoutSlate } from "./_BlackoutSlate";
import { ___listOfCaptionDescription } from "./___listOfCaptionDescription";
import { _GlobalConfiguration } from "./_GlobalConfiguration";
import { ___listOfOutputGroup } from "./___listOfOutputGroup";
import { _TimecodeConfig } from "./_TimecodeConfig";
import { ___listOfVideoDescription } from "./___listOfVideoDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EncoderSettings: _Structure_ = {
  type: "structure",
  required: [
    "VideoDescriptions",
    "AudioDescriptions",
    "OutputGroups",
    "TimecodeConfig"
  ],
  members: {
    AudioDescriptions: {
      shape: ___listOfAudioDescription,
      locationName: "audioDescriptions"
    },
    AvailBlanking: {
      shape: _AvailBlanking,
      locationName: "availBlanking"
    },
    AvailConfiguration: {
      shape: _AvailConfiguration,
      locationName: "availConfiguration"
    },
    BlackoutSlate: {
      shape: _BlackoutSlate,
      locationName: "blackoutSlate"
    },
    CaptionDescriptions: {
      shape: ___listOfCaptionDescription,
      locationName: "captionDescriptions"
    },
    GlobalConfiguration: {
      shape: _GlobalConfiguration,
      locationName: "globalConfiguration"
    },
    OutputGroups: {
      shape: ___listOfOutputGroup,
      locationName: "outputGroups"
    },
    TimecodeConfig: {
      shape: _TimecodeConfig,
      locationName: "timecodeConfig"
    },
    VideoDescriptions: {
      shape: ___listOfVideoDescription,
      locationName: "videoDescriptions"
    }
  }
};

import { ___mapOfAudioSelectorGroup } from "./___mapOfAudioSelectorGroup";
import { ___mapOfAudioSelector } from "./___mapOfAudioSelector";
import { ___mapOfCaptionSelector } from "./___mapOfCaptionSelector";
import { _Rectangle } from "./_Rectangle";
import { _ImageInserter } from "./_ImageInserter";
import { ___listOfInputClipping } from "./___listOfInputClipping";
import { _VideoSelector } from "./_VideoSelector";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputTemplate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AudioSelectorGroups: {
      shape: ___mapOfAudioSelectorGroup,
      locationName: "audioSelectorGroups"
    },
    AudioSelectors: {
      shape: ___mapOfAudioSelector,
      locationName: "audioSelectors"
    },
    CaptionSelectors: {
      shape: ___mapOfCaptionSelector,
      locationName: "captionSelectors"
    },
    Crop: {
      shape: _Rectangle,
      locationName: "crop"
    },
    DeblockFilter: {
      shape: {
        type: "string"
      },
      locationName: "deblockFilter"
    },
    DenoiseFilter: {
      shape: {
        type: "string"
      },
      locationName: "denoiseFilter"
    },
    FilterEnable: {
      shape: {
        type: "string"
      },
      locationName: "filterEnable"
    },
    FilterStrength: {
      shape: {
        type: "integer",
        min: -5
      },
      locationName: "filterStrength"
    },
    ImageInserter: {
      shape: _ImageInserter,
      locationName: "imageInserter"
    },
    InputClippings: {
      shape: ___listOfInputClipping,
      locationName: "inputClippings"
    },
    Position: {
      shape: _Rectangle,
      locationName: "position"
    },
    ProgramNumber: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "programNumber"
    },
    PsiControl: {
      shape: {
        type: "string"
      },
      locationName: "psiControl"
    },
    TimecodeSource: {
      shape: {
        type: "string"
      },
      locationName: "timecodeSource"
    },
    VideoSelector: {
      shape: _VideoSelector,
      locationName: "videoSelector"
    }
  }
};

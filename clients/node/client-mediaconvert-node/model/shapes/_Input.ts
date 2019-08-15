import { ___mapOfAudioSelectorGroup } from "./___mapOfAudioSelectorGroup";
import { ___mapOfAudioSelector } from "./___mapOfAudioSelector";
import { ___mapOfCaptionSelector } from "./___mapOfCaptionSelector";
import { _Rectangle } from "./_Rectangle";
import { _InputDecryptionSettings } from "./_InputDecryptionSettings";
import { _ImageInserter } from "./_ImageInserter";
import { ___listOfInputClipping } from "./___listOfInputClipping";
import { ___listOf__stringPatternS3ASSETMAPXml } from "./___listOf__stringPatternS3ASSETMAPXml";
import { _VideoSelector } from "./_VideoSelector";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Input: _Structure_ = {
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
    DecryptionSettings: {
      shape: _InputDecryptionSettings,
      locationName: "decryptionSettings"
    },
    DenoiseFilter: {
      shape: {
        type: "string"
      },
      locationName: "denoiseFilter"
    },
    FileInput: {
      shape: {
        type: "string"
      },
      locationName: "fileInput"
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
    SupplementalImps: {
      shape: ___listOf__stringPatternS3ASSETMAPXml,
      locationName: "supplementalImps"
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

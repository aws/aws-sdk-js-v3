import { ___listOfAudioSelector } from "./___listOfAudioSelector";
import { ___listOfCaptionSelector } from "./___listOfCaptionSelector";
import { _NetworkInputSettings } from "./_NetworkInputSettings";
import { _VideoSelector } from "./_VideoSelector";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AudioSelectors: {
      shape: ___listOfAudioSelector,
      locationName: "audioSelectors"
    },
    CaptionSelectors: {
      shape: ___listOfCaptionSelector,
      locationName: "captionSelectors"
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
    FilterStrength: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "filterStrength"
    },
    InputFilter: {
      shape: {
        type: "string"
      },
      locationName: "inputFilter"
    },
    NetworkInputSettings: {
      shape: _NetworkInputSettings,
      locationName: "networkInputSettings"
    },
    SourceEndBehavior: {
      shape: {
        type: "string"
      },
      locationName: "sourceEndBehavior"
    },
    VideoSelector: {
      shape: _VideoSelector,
      locationName: "videoSelector"
    }
  }
};

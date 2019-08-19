import { ___listOf__integerMin1Max2147483647 } from "./___listOf__integerMin1Max2147483647";
import { _RemixSettings } from "./_RemixSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AudioSelector: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CustomLanguageCode: {
      shape: {
        type: "string",
        min: 3
      },
      locationName: "customLanguageCode"
    },
    DefaultSelection: {
      shape: {
        type: "string"
      },
      locationName: "defaultSelection"
    },
    ExternalAudioFileInput: {
      shape: {
        type: "string"
      },
      locationName: "externalAudioFileInput"
    },
    LanguageCode: {
      shape: {
        type: "string"
      },
      locationName: "languageCode"
    },
    Offset: {
      shape: {
        type: "integer",
        min: -2147483648
      },
      locationName: "offset"
    },
    Pids: {
      shape: ___listOf__integerMin1Max2147483647,
      locationName: "pids"
    },
    ProgramSelection: {
      shape: {
        type: "integer"
      },
      locationName: "programSelection"
    },
    RemixSettings: {
      shape: _RemixSettings,
      locationName: "remixSettings"
    },
    SelectorType: {
      shape: {
        type: "string"
      },
      locationName: "selectorType"
    },
    Tracks: {
      shape: ___listOf__integerMin1Max2147483647,
      locationName: "tracks"
    }
  }
};

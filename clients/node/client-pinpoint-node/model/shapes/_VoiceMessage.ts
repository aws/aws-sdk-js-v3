import { _MapOfListOf__string } from "./_MapOfListOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VoiceMessage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Body: {
      shape: {
        type: "string"
      }
    },
    LanguageCode: {
      shape: {
        type: "string"
      }
    },
    OriginationNumber: {
      shape: {
        type: "string"
      }
    },
    Substitutions: {
      shape: _MapOfListOf__string
    },
    VoiceId: {
      shape: {
        type: "string"
      }
    }
  }
};

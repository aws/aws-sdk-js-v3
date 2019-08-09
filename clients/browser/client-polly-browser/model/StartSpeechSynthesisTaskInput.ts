import { _LexiconNameList } from "./_LexiconNameList";
import { _SpeechMarkTypeList } from "./_SpeechMarkTypeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartSpeechSynthesisTaskInput: _Structure_ = {
  type: "structure",
  required: ["OutputFormat", "OutputS3BucketName", "Text", "VoiceId"],
  members: {
    Engine: {
      shape: {
        type: "string"
      }
    },
    LanguageCode: {
      shape: {
        type: "string"
      }
    },
    LexiconNames: {
      shape: _LexiconNameList
    },
    OutputFormat: {
      shape: {
        type: "string"
      }
    },
    OutputS3BucketName: {
      shape: {
        type: "string"
      }
    },
    OutputS3KeyPrefix: {
      shape: {
        type: "string"
      }
    },
    SampleRate: {
      shape: {
        type: "string"
      }
    },
    SnsTopicArn: {
      shape: {
        type: "string"
      }
    },
    SpeechMarkTypes: {
      shape: _SpeechMarkTypeList
    },
    Text: {
      shape: {
        type: "string"
      }
    },
    TextType: {
      shape: {
        type: "string"
      }
    },
    VoiceId: {
      shape: {
        type: "string"
      }
    }
  }
};

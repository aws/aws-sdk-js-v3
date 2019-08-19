import { _LexiconNameList } from "./_LexiconNameList";
import { _SpeechMarkTypeList } from "./_SpeechMarkTypeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SynthesisTask: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Engine: {
      shape: {
        type: "string"
      }
    },
    TaskId: {
      shape: {
        type: "string"
      }
    },
    TaskStatus: {
      shape: {
        type: "string"
      }
    },
    TaskStatusReason: {
      shape: {
        type: "string"
      }
    },
    OutputUri: {
      shape: {
        type: "string"
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    RequestCharacters: {
      shape: {
        type: "integer"
      }
    },
    SnsTopicArn: {
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
    SampleRate: {
      shape: {
        type: "string"
      }
    },
    SpeechMarkTypes: {
      shape: _SpeechMarkTypeList
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
    },
    LanguageCode: {
      shape: {
        type: "string"
      }
    }
  }
};

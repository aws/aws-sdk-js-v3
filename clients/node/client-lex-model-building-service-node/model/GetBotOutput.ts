import { _IntentList } from "./_IntentList";
import { _Prompt } from "./_Prompt";
import { _Statement } from "./_Statement";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBotOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string",
        min: 2
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    intents: {
      shape: _IntentList
    },
    clarificationPrompt: {
      shape: _Prompt
    },
    abortStatement: {
      shape: _Statement
    },
    status: {
      shape: {
        type: "string"
      }
    },
    failureReason: {
      shape: {
        type: "string"
      }
    },
    lastUpdatedDate: {
      shape: {
        type: "timestamp"
      }
    },
    createdDate: {
      shape: {
        type: "timestamp"
      }
    },
    idleSessionTTLInSeconds: {
      shape: {
        type: "integer",
        min: 60
      }
    },
    voiceId: {
      shape: {
        type: "string"
      }
    },
    checksum: {
      shape: {
        type: "string"
      }
    },
    version: {
      shape: {
        type: "string",
        min: 1
      }
    },
    locale: {
      shape: {
        type: "string"
      }
    },
    childDirected: {
      shape: {
        type: "boolean"
      }
    }
  }
};

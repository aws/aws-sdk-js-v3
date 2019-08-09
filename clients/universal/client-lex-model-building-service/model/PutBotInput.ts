import { _IntentList } from "./_IntentList";
import { _Prompt } from "./_Prompt";
import { _Statement } from "./_Statement";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutBotInput: _Structure_ = {
  type: "structure",
  required: ["name", "locale", "childDirected"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 2
      },
      location: "uri",
      locationName: "name"
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
    processBehavior: {
      shape: {
        type: "string"
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
    },
    createVersion: {
      shape: {
        type: "boolean"
      }
    }
  }
};

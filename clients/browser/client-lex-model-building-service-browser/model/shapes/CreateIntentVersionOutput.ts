import { _SlotList } from "./_SlotList";
import { _IntentUtteranceList } from "./_IntentUtteranceList";
import { _Prompt } from "./_Prompt";
import { _Statement } from "./_Statement";
import { _FollowUpPrompt } from "./_FollowUpPrompt";
import { _CodeHook } from "./_CodeHook";
import { _FulfillmentActivity } from "./_FulfillmentActivity";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateIntentVersionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    slots: {
      shape: _SlotList
    },
    sampleUtterances: {
      shape: _IntentUtteranceList
    },
    confirmationPrompt: {
      shape: _Prompt
    },
    rejectionStatement: {
      shape: _Statement
    },
    followUpPrompt: {
      shape: _FollowUpPrompt
    },
    conclusionStatement: {
      shape: _Statement
    },
    dialogCodeHook: {
      shape: _CodeHook
    },
    fulfillmentActivity: {
      shape: _FulfillmentActivity
    },
    parentIntentSignature: {
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
    version: {
      shape: {
        type: "string",
        min: 1
      }
    },
    checksum: {
      shape: {
        type: "string"
      }
    }
  }
};

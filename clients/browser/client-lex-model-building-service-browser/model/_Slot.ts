import { _Prompt } from "./_Prompt";
import { _SlotUtteranceList } from "./_SlotUtteranceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Slot: _Structure_ = {
  type: "structure",
  required: ["name", "slotConstraint"],
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
    slotConstraint: {
      shape: {
        type: "string"
      }
    },
    slotType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    slotTypeVersion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    valueElicitationPrompt: {
      shape: _Prompt
    },
    priority: {
      shape: {
        type: "integer"
      }
    },
    sampleUtterances: {
      shape: _SlotUtteranceList
    },
    responseCard: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

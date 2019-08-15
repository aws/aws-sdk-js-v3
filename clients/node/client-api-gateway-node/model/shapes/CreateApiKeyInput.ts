import { _ListOfStageKeys } from "./_ListOfStageKeys";
import { _MapOfStringToString } from "./_MapOfStringToString";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateApiKeyInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    enabled: {
      shape: {
        type: "boolean"
      }
    },
    generateDistinctId: {
      shape: {
        type: "boolean"
      }
    },
    value: {
      shape: {
        type: "string"
      }
    },
    stageKeys: {
      shape: _ListOfStageKeys
    },
    customerId: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _MapOfStringToString
    }
  }
};

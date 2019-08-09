import { _Predicate } from "./_Predicate";
import { _ActionList } from "./_ActionList";
import { _TagsMap } from "./_TagsMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTriggerInput: _Structure_ = {
  type: "structure",
  required: ["Name", "Type", "Actions"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    WorkflowName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    Schedule: {
      shape: {
        type: "string"
      }
    },
    Predicate: {
      shape: _Predicate
    },
    Actions: {
      shape: _ActionList
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    StartOnCreation: {
      shape: {
        type: "boolean"
      }
    },
    Tags: {
      shape: _TagsMap
    }
  }
};

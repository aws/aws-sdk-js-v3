import { _ActionList } from "./_ActionList";
import { _Predicate } from "./_Predicate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TriggerUpdate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Schedule: {
      shape: {
        type: "string"
      }
    },
    Actions: {
      shape: _ActionList
    },
    Predicate: {
      shape: _Predicate
    }
  }
};

import { _ActionList } from "./_ActionList";
import { _Predicate } from "./_Predicate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Trigger: _Structure_ = {
  type: "structure",
  required: [],
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
    Id: {
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
    State: {
      shape: {
        type: "string"
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

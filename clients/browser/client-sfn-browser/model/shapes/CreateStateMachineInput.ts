import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateStateMachineInput: _Structure_ = {
  type: "structure",
  required: ["name", "definition", "roleArn"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    definition: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    roleArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    tags: {
      shape: _TagList
    }
  }
};

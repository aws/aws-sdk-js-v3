import { _InputDefinition } from "./_InputDefinition";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateInputInput: _Structure_ = {
  type: "structure",
  required: ["inputName", "inputDefinition"],
  members: {
    inputName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    inputDescription: {
      shape: {
        type: "string"
      }
    },
    inputDefinition: {
      shape: _InputDefinition
    },
    tags: {
      shape: _Tags
    }
  }
};

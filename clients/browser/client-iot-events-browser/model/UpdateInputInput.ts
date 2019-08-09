import { _InputDefinition } from "./_InputDefinition";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateInputInput: _Structure_ = {
  type: "structure",
  required: ["inputName", "inputDefinition"],
  members: {
    inputName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "inputName"
    },
    inputDescription: {
      shape: {
        type: "string"
      }
    },
    inputDefinition: {
      shape: _InputDefinition
    }
  }
};

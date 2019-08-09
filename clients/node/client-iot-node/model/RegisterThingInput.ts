import { _Parameters } from "./_Parameters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterThingInput: _Structure_ = {
  type: "structure",
  required: ["templateBody"],
  members: {
    templateBody: {
      shape: {
        type: "string"
      }
    },
    parameters: {
      shape: _Parameters
    }
  }
};

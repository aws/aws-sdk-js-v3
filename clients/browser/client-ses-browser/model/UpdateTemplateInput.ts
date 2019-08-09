import { _Template } from "./_Template";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateTemplateInput: _Structure_ = {
  type: "structure",
  required: ["Template"],
  members: {
    Template: {
      shape: _Template
    }
  }
};

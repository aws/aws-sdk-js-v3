import { _Template } from "./_Template";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTemplateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Template: {
      shape: _Template
    }
  }
};

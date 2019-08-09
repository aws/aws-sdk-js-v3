import { _SystemTemplateDescription } from "./_SystemTemplateDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSystemTemplateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    description: {
      shape: _SystemTemplateDescription
    }
  }
};

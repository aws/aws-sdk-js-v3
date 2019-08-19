import { _SystemTemplateSummary } from "./_SystemTemplateSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateSystemTemplateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    summary: {
      shape: _SystemTemplateSummary
    }
  }
};

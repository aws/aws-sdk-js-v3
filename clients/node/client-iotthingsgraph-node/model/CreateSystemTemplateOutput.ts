import { _SystemTemplateSummary } from "./_SystemTemplateSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSystemTemplateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    summary: {
      shape: _SystemTemplateSummary
    }
  }
};

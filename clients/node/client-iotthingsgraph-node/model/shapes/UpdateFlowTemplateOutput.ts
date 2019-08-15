import { _FlowTemplateSummary } from "./_FlowTemplateSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateFlowTemplateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    summary: {
      shape: _FlowTemplateSummary
    }
  }
};

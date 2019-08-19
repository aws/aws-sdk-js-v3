import { _FlowTemplateDescription } from "./_FlowTemplateDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFlowTemplateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    description: {
      shape: _FlowTemplateDescription
    }
  }
};

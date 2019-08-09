import { _FlowTemplateSummaries } from "./_FlowTemplateSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchFlowTemplatesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    summaries: {
      shape: _FlowTemplateSummaries
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

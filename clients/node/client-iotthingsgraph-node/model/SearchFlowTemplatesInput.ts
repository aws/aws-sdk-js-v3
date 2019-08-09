import { _FlowTemplateFilters } from "./_FlowTemplateFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchFlowTemplatesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    filters: {
      shape: _FlowTemplateFilters
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};

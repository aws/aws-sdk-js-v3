import { _SystemTemplateFilters } from "./_SystemTemplateFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchSystemTemplatesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    filters: {
      shape: _SystemTemplateFilters
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

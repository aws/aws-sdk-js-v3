import { _DocumentClassifierFilter } from "./_DocumentClassifierFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDocumentClassifiersInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filter: {
      shape: _DocumentClassifierFilter
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};

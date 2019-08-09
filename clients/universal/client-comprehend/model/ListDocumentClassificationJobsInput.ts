import { _DocumentClassificationJobFilter } from "./_DocumentClassificationJobFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDocumentClassificationJobsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filter: {
      shape: _DocumentClassificationJobFilter
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

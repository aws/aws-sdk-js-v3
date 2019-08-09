import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchIndexInput: _Structure_ = {
  type: "structure",
  required: ["queryString"],
  members: {
    indexName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    queryString: {
      shape: {
        type: "string",
        min: 1
      }
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
    },
    queryVersion: {
      shape: {
        type: "string"
      }
    }
  }
};

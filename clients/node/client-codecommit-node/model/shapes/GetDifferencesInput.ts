import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDifferencesInput: _Structure_ = {
  type: "structure",
  required: ["repositoryName", "afterCommitSpecifier"],
  members: {
    repositoryName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    beforeCommitSpecifier: {
      shape: {
        type: "string"
      }
    },
    afterCommitSpecifier: {
      shape: {
        type: "string"
      }
    },
    beforePath: {
      shape: {
        type: "string"
      }
    },
    afterPath: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

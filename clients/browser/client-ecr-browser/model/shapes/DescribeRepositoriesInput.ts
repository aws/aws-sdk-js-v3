import { _RepositoryNameList } from "./_RepositoryNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRepositoriesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    registryId: {
      shape: {
        type: "string"
      }
    },
    repositoryNames: {
      shape: _RepositoryNameList
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

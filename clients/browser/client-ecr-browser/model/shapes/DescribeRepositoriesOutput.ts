import { _RepositoryList } from "./_RepositoryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRepositoriesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    repositories: {
      shape: _RepositoryList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

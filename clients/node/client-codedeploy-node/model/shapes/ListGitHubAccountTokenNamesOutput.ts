import { _GitHubAccountTokenNameList } from "./_GitHubAccountTokenNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListGitHubAccountTokenNamesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    tokenNameList: {
      shape: _GitHubAccountTokenNameList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

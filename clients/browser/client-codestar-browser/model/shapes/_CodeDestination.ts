import { _CodeCommitCodeDestination } from "./_CodeCommitCodeDestination";
import { _GitHubCodeDestination } from "./_GitHubCodeDestination";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CodeDestination: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    codeCommit: {
      shape: _CodeCommitCodeDestination
    },
    gitHub: {
      shape: _GitHubCodeDestination
    }
  }
};

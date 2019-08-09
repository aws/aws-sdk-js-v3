import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GitHubLocation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    repository: {
      shape: {
        type: "string"
      }
    },
    commitId: {
      shape: {
        type: "string"
      }
    }
  }
};

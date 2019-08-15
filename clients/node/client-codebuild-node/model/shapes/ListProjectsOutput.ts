import { _ProjectNames } from "./_ProjectNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListProjectsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    nextToken: {
      shape: {
        type: "string"
      }
    },
    projects: {
      shape: _ProjectNames
    }
  }
};

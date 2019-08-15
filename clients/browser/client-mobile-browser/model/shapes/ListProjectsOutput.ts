import { _ProjectSummaries } from "./_ProjectSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListProjectsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    projects: {
      shape: _ProjectSummaries
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

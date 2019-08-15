import { _ProjectsList } from "./_ProjectsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListProjectsOutput: _Structure_ = {
  type: "structure",
  required: ["projects"],
  members: {
    projects: {
      shape: _ProjectsList
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

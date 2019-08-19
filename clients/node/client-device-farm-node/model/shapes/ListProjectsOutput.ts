import { _Projects } from "./_Projects";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListProjectsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    projects: {
      shape: _Projects
    },
    nextToken: {
      shape: {
        type: "string",
        min: 4
      }
    }
  }
};

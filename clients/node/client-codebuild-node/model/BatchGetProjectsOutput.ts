import { _Projects } from "./_Projects";
import { _ProjectNames } from "./_ProjectNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetProjectsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    projects: {
      shape: _Projects
    },
    projectsNotFound: {
      shape: _ProjectNames
    }
  }
};

import { _ProjectNames } from "./_ProjectNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetProjectsInput: _Structure_ = {
  type: "structure",
  required: ["names"],
  members: {
    names: {
      shape: _ProjectNames
    }
  }
};

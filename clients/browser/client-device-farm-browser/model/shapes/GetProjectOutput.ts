import { _Project } from "./_Project";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetProjectOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    project: {
      shape: _Project
    }
  }
};

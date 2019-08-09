import { _ProjectDetails } from "./_ProjectDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateProjectOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    details: {
      shape: _ProjectDetails
    }
  }
};

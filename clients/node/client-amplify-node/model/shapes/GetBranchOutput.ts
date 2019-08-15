import { _Branch } from "./_Branch";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBranchOutput: _Structure_ = {
  type: "structure",
  required: ["branch"],
  members: {
    branch: {
      shape: _Branch
    }
  }
};

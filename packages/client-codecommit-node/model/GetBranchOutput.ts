import { _BranchInfo } from "./_BranchInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBranchOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    branch: {
      shape: _BranchInfo
    }
  }
};

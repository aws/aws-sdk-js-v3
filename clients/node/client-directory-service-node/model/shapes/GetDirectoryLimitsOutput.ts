import { _DirectoryLimits } from "./_DirectoryLimits";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDirectoryLimitsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DirectoryLimits: {
      shape: _DirectoryLimits
    }
  }
};

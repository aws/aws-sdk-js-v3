import { _RunCommandTargets } from "./_RunCommandTargets";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RunCommandParameters: _Structure_ = {
  type: "structure",
  required: ["RunCommandTargets"],
  members: {
    RunCommandTargets: {
      shape: _RunCommandTargets
    }
  }
};

import { _InstanceSummary } from "./_InstanceSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDeploymentInstanceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    instanceSummary: {
      shape: _InstanceSummary
    }
  }
};

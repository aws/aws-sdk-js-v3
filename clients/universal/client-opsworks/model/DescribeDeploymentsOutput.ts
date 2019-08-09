import { _Deployments } from "./_Deployments";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDeploymentsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Deployments: {
      shape: _Deployments
    }
  }
};

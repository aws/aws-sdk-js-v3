import { _RdsDbInstances } from "./_RdsDbInstances";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRdsDbInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RdsDbInstances: {
      shape: _RdsDbInstances
    }
  }
};

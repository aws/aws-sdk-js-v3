import { _BatchDescribeArnList } from "./_BatchDescribeArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeResourceGroupsInput: _Structure_ = {
  type: "structure",
  required: ["resourceGroupArns"],
  members: {
    resourceGroupArns: {
      shape: _BatchDescribeArnList
    }
  }
};

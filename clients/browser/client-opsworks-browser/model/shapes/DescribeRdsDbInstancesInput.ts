import { _Strings } from "./_Strings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRdsDbInstancesInput: _Structure_ = {
  type: "structure",
  required: ["StackId"],
  members: {
    StackId: {
      shape: {
        type: "string"
      }
    },
    RdsDbInstanceArns: {
      shape: _Strings
    }
  }
};

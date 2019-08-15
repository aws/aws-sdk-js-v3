import { _UserPoolType } from "./_UserPoolType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeUserPoolOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserPool: {
      shape: _UserPoolType
    }
  }
};

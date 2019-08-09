import { _UserPoolClientType } from "./_UserPoolClientType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeUserPoolClientOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserPoolClient: {
      shape: _UserPoolClientType
    }
  }
};

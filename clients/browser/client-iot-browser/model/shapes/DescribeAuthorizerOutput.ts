import { _AuthorizerDescription } from "./_AuthorizerDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAuthorizerOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    authorizerDescription: {
      shape: _AuthorizerDescription
    }
  }
};

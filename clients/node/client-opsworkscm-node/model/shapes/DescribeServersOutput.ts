import { _Servers } from "./_Servers";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeServersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Servers: {
      shape: _Servers
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

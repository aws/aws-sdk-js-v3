import { _ByoipCidrSet } from "./_ByoipCidrSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeByoipCidrsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ByoipCidrs: {
      shape: _ByoipCidrSet,
      locationName: "byoipCidrSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};

import { _ValueStringList } from "./_ValueStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePublicIpv4PoolsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PoolIds: {
      shape: _ValueStringList,
      locationName: "PoolId"
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};

import { _AwsAccountIdList } from "./_AwsAccountIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeImagePermissionsInput: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    },
    SharedAwsAccountIds: {
      shape: _AwsAccountIdList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

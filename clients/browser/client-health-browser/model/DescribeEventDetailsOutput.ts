import { _DescribeEventDetailsSuccessfulSet } from "./_DescribeEventDetailsSuccessfulSet";
import { _DescribeEventDetailsFailedSet } from "./_DescribeEventDetailsFailedSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEventDetailsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    successfulSet: {
      shape: _DescribeEventDetailsSuccessfulSet
    },
    failedSet: {
      shape: _DescribeEventDetailsFailedSet
    }
  }
};

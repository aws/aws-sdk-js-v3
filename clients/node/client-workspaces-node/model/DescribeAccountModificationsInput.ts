import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAccountModificationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

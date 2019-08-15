import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCodeRepositoryInput: _Structure_ = {
  type: "structure",
  required: ["CodeRepositoryName"],
  members: {
    CodeRepositoryName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

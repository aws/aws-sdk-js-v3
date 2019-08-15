import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEnvironmentStatusInput: _Structure_ = {
  type: "structure",
  required: ["environmentId"],
  members: {
    environmentId: {
      shape: {
        type: "string"
      }
    }
  }
};

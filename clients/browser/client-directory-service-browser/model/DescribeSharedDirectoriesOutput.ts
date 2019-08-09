import { _SharedDirectories } from "./_SharedDirectories";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSharedDirectoriesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SharedDirectories: {
      shape: _SharedDirectories
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

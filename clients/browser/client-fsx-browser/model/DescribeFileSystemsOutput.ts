import { _FileSystems } from "./_FileSystems";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFileSystemsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FileSystems: {
      shape: _FileSystems
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

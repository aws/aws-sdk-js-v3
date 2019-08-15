import { _DirectoryConfigList } from "./_DirectoryConfigList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDirectoryConfigsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DirectoryConfigs: {
      shape: _DirectoryConfigList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

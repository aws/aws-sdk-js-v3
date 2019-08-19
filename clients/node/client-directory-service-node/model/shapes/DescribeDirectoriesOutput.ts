import { _DirectoryDescriptions } from "./_DirectoryDescriptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDirectoriesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DirectoryDescriptions: {
      shape: _DirectoryDescriptions
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

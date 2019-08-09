import { _DirectoryList } from "./_DirectoryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDirectoriesOutput: _Structure_ = {
  type: "structure",
  required: ["Directories"],
  members: {
    Directories: {
      shape: _DirectoryList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

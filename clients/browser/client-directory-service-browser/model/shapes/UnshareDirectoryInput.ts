import { _UnshareTarget } from "./_UnshareTarget";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UnshareDirectoryInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryId", "UnshareTarget"],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    UnshareTarget: {
      shape: _UnshareTarget
    }
  }
};

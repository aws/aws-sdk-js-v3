import { _SharedDirectory } from "./_SharedDirectory";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AcceptSharedDirectoryOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SharedDirectory: {
      shape: _SharedDirectory
    }
  }
};

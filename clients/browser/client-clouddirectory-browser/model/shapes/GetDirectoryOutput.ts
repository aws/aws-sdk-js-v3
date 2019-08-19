import { _Directory } from "./_Directory";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDirectoryOutput: _Structure_ = {
  type: "structure",
  required: ["Directory"],
  members: {
    Directory: {
      shape: _Directory
    }
  }
};

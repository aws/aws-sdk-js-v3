import { _Disk } from "./_Disk";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDiskOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    disk: {
      shape: _Disk
    }
  }
};

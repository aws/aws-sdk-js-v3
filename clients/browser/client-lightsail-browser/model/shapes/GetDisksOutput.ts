import { _DiskList } from "./_DiskList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDisksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    disks: {
      shape: _DiskList
    },
    nextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};

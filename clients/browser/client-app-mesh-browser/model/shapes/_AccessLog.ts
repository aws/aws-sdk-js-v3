import { _FileAccessLog } from "./_FileAccessLog";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AccessLog: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    file: {
      shape: _FileAccessLog
    }
  }
};

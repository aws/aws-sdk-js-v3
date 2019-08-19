import { _AccessLog } from "./_AccessLog";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Logging: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    accessLog: {
      shape: _AccessLog
    }
  }
};

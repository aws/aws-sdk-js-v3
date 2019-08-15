import { _LogRecord } from "./_LogRecord";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLogRecordOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    logRecord: {
      shape: _LogRecord
    }
  }
};

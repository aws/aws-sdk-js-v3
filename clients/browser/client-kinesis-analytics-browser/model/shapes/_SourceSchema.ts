import { _RecordFormat } from "./_RecordFormat";
import { _RecordColumns } from "./_RecordColumns";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SourceSchema: _Structure_ = {
  type: "structure",
  required: ["RecordFormat", "RecordColumns"],
  members: {
    RecordFormat: {
      shape: _RecordFormat
    },
    RecordEncoding: {
      shape: {
        type: "string"
      }
    },
    RecordColumns: {
      shape: _RecordColumns
    }
  }
};

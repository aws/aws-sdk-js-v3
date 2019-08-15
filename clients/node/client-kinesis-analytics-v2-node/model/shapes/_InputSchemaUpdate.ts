import { _RecordFormat } from "./_RecordFormat";
import { _RecordColumns } from "./_RecordColumns";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputSchemaUpdate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RecordFormatUpdate: {
      shape: _RecordFormat
    },
    RecordEncodingUpdate: {
      shape: {
        type: "string"
      }
    },
    RecordColumnUpdates: {
      shape: _RecordColumns
    }
  }
};

import { _Metadata } from "./_Metadata";
import { _FieldList } from "./_FieldList";
import { _SqlRecords } from "./_SqlRecords";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ExecuteStatementOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    columnMetadata: {
      shape: _Metadata
    },
    generatedFields: {
      shape: _FieldList
    },
    numberOfRecordsUpdated: {
      shape: {
        type: "integer"
      }
    },
    records: {
      shape: _SqlRecords
    }
  }
};

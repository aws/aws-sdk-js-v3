import { _CSVInput } from "./_CSVInput";
import { _JSONInput } from "./_JSONInput";
import { _ParquetInput } from "./_ParquetInput";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputSerialization: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CSV: {
      shape: _CSVInput
    },
    CompressionType: {
      shape: {
        type: "string"
      }
    },
    JSON: {
      shape: _JSONInput
    },
    Parquet: {
      shape: _ParquetInput
    }
  }
};

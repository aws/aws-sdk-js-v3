import { _Metadata } from "./_Metadata";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResultSetMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    columnCount: {
      shape: {
        type: "integer"
      }
    },
    columnMetadata: {
      shape: _Metadata
    }
  }
};

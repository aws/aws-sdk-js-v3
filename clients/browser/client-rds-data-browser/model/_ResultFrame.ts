import { _Records } from "./_Records";
import { _ResultSetMetadata } from "./_ResultSetMetadata";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResultFrame: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    records: {
      shape: _Records
    },
    resultSetMetadata: {
      shape: _ResultSetMetadata
    }
  }
};

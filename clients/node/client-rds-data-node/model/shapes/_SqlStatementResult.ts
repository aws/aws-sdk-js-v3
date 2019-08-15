import { _ResultFrame } from "./_ResultFrame";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SqlStatementResult: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    numberOfRecordsUpdated: {
      shape: {
        type: "integer"
      }
    },
    resultFrame: {
      shape: _ResultFrame
    }
  }
};

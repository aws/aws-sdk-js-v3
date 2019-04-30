import { _GlobalTableList } from "./_GlobalTableList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListGlobalTablesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GlobalTables: {
      shape: _GlobalTableList
    },
    LastEvaluatedGlobalTableName: {
      shape: {
        type: "string",
        min: 3
      }
    }
  }
};

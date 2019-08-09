import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListGlobalTablesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ExclusiveStartGlobalTableName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    Limit: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    RegionName: {
      shape: {
        type: "string"
      }
    }
  }
};

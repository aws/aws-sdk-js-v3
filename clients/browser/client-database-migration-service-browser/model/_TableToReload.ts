import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TableToReload: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SchemaName: {
      shape: {
        type: "string"
      }
    },
    TableName: {
      shape: {
        type: "string"
      }
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CopyCommand: _Structure_ = {
  type: "structure",
  required: ["DataTableName"],
  members: {
    DataTableName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DataTableColumns: {
      shape: {
        type: "string"
      }
    },
    CopyOptions: {
      shape: {
        type: "string"
      }
    }
  }
};

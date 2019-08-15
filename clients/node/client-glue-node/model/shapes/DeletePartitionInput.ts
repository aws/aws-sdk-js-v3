import { _ValueStringList } from "./_ValueStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeletePartitionInput: _Structure_ = {
  type: "structure",
  required: ["DatabaseName", "TableName", "PartitionValues"],
  members: {
    CatalogId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DatabaseName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TableName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PartitionValues: {
      shape: _ValueStringList
    }
  }
};

import { _PartitionInput } from "./_PartitionInput";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePartitionInput: _Structure_ = {
  type: "structure",
  required: ["DatabaseName", "TableName", "PartitionInput"],
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
    PartitionInput: {
      shape: _PartitionInput
    }
  }
};

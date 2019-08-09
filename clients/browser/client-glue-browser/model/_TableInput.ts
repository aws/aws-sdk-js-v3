import { _StorageDescriptor } from "./_StorageDescriptor";
import { _ColumnList } from "./_ColumnList";
import { _ParametersMap } from "./_ParametersMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TableInput: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Owner: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LastAccessTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastAnalyzedTime: {
      shape: {
        type: "timestamp"
      }
    },
    Retention: {
      shape: {
        type: "integer"
      }
    },
    StorageDescriptor: {
      shape: _StorageDescriptor
    },
    PartitionKeys: {
      shape: _ColumnList
    },
    ViewOriginalText: {
      shape: {
        type: "string"
      }
    },
    ViewExpandedText: {
      shape: {
        type: "string"
      }
    },
    TableType: {
      shape: {
        type: "string"
      }
    },
    Parameters: {
      shape: _ParametersMap
    }
  }
};

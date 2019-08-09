import { _ColumnList } from "./_ColumnList";
import { _SerDeInfo } from "./_SerDeInfo";
import { _NameStringList } from "./_NameStringList";
import { _OrderList } from "./_OrderList";
import { _ParametersMap } from "./_ParametersMap";
import { _SkewedInfo } from "./_SkewedInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StorageDescriptor: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Columns: {
      shape: _ColumnList
    },
    Location: {
      shape: {
        type: "string"
      }
    },
    InputFormat: {
      shape: {
        type: "string"
      }
    },
    OutputFormat: {
      shape: {
        type: "string"
      }
    },
    Compressed: {
      shape: {
        type: "boolean"
      }
    },
    NumberOfBuckets: {
      shape: {
        type: "integer"
      }
    },
    SerdeInfo: {
      shape: _SerDeInfo
    },
    BucketColumns: {
      shape: _NameStringList
    },
    SortColumns: {
      shape: _OrderList
    },
    Parameters: {
      shape: _ParametersMap
    },
    SkewedInfo: {
      shape: _SkewedInfo
    },
    StoredAsSubDirectories: {
      shape: {
        type: "boolean"
      }
    }
  }
};

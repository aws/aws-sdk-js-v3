import { _TagKeyList } from "./_TagKeyList";
import { _TagValueList } from "./_TagValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSnapshotCopyGrantsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SnapshotCopyGrantName: {
      shape: {
        type: "string"
      }
    },
    MaxRecords: {
      shape: {
        type: "integer"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    },
    TagKeys: {
      shape: _TagKeyList
    },
    TagValues: {
      shape: _TagValueList
    }
  }
};

import { _TagKeyList } from "./_TagKeyList";
import { _TagValueList } from "./_TagValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSnapshotSchedulesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    ScheduleIdentifier: {
      shape: {
        type: "string"
      }
    },
    TagKeys: {
      shape: _TagKeyList
    },
    TagValues: {
      shape: _TagValueList
    },
    Marker: {
      shape: {
        type: "string"
      }
    },
    MaxRecords: {
      shape: {
        type: "integer"
      }
    }
  }
};

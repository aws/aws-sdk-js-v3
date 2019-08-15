import { _RecordList } from "./_RecordList";
import { _MergedDatasetNameList } from "./_MergedDatasetNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRecordsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Records: {
      shape: _RecordList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    Count: {
      shape: {
        type: "integer"
      }
    },
    DatasetSyncCount: {
      shape: {
        type: "integer"
      }
    },
    LastModifiedBy: {
      shape: {
        type: "string"
      }
    },
    MergedDatasetNames: {
      shape: _MergedDatasetNameList
    },
    DatasetExists: {
      shape: {
        type: "boolean"
      }
    },
    DatasetDeletedAfterRequestedSyncCount: {
      shape: {
        type: "boolean"
      }
    },
    SyncSessionToken: {
      shape: {
        type: "string"
      }
    }
  }
};

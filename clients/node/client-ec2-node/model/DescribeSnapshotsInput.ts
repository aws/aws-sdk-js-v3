import { _FilterList } from "./_FilterList";
import { _OwnerStringList } from "./_OwnerStringList";
import { _RestorableByStringList } from "./_RestorableByStringList";
import { _SnapshotIdStringList } from "./_SnapshotIdStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSnapshotsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    OwnerIds: {
      shape: _OwnerStringList,
      locationName: "Owner"
    },
    RestorableByUserIds: {
      shape: _RestorableByStringList,
      locationName: "RestorableBy"
    },
    SnapshotIds: {
      shape: _SnapshotIdStringList,
      locationName: "SnapshotId"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};

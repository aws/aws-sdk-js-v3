import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePendingMaintenanceActionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReplicationInstanceArn: {
      shape: {
        type: "string"
      }
    },
    Filters: {
      shape: _FilterList
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

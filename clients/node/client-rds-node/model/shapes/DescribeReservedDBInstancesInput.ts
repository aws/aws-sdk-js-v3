import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReservedDBInstancesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReservedDBInstanceId: {
      shape: {
        type: "string"
      }
    },
    ReservedDBInstancesOfferingId: {
      shape: {
        type: "string"
      }
    },
    DBInstanceClass: {
      shape: {
        type: "string"
      }
    },
    Duration: {
      shape: {
        type: "string"
      }
    },
    ProductDescription: {
      shape: {
        type: "string"
      }
    },
    OfferingType: {
      shape: {
        type: "string"
      }
    },
    MultiAZ: {
      shape: {
        type: "boolean"
      }
    },
    Filters: {
      shape: _FilterList
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
    }
  }
};

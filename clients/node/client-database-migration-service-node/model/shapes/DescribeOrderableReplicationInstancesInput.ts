import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeOrderableReplicationInstancesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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

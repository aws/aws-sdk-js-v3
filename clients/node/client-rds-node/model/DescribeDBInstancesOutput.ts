import { _DBInstanceList } from "./_DBInstanceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDBInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    DBInstances: {
      shape: _DBInstanceList
    }
  }
};

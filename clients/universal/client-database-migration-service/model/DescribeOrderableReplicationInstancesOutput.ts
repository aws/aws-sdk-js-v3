import { _OrderableReplicationInstanceList } from "./_OrderableReplicationInstanceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeOrderableReplicationInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OrderableReplicationInstances: {
      shape: _OrderableReplicationInstanceList
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};

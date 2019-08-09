import { _ReplicationSubnetGroup } from "./_ReplicationSubnetGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyReplicationSubnetGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReplicationSubnetGroup: {
      shape: _ReplicationSubnetGroup
    }
  }
};

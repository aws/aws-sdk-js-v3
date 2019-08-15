import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteReplicationSubnetGroupInput: _Structure_ = {
  type: "structure",
  required: ["ReplicationSubnetGroupIdentifier"],
  members: {
    ReplicationSubnetGroupIdentifier: {
      shape: {
        type: "string"
      }
    }
  }
};

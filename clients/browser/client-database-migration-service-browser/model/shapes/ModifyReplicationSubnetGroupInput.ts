import { _SubnetIdentifierList } from "./_SubnetIdentifierList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyReplicationSubnetGroupInput: _Structure_ = {
  type: "structure",
  required: ["ReplicationSubnetGroupIdentifier", "SubnetIds"],
  members: {
    ReplicationSubnetGroupIdentifier: {
      shape: {
        type: "string"
      }
    },
    ReplicationSubnetGroupDescription: {
      shape: {
        type: "string"
      }
    },
    SubnetIds: {
      shape: _SubnetIdentifierList
    }
  }
};

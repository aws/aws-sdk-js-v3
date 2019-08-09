import { _SubnetIdentifierList } from "./_SubnetIdentifierList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateReplicationSubnetGroupInput: _Structure_ = {
  type: "structure",
  required: [
    "ReplicationSubnetGroupIdentifier",
    "ReplicationSubnetGroupDescription",
    "SubnetIds"
  ],
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
    },
    Tags: {
      shape: _TagList
    }
  }
};

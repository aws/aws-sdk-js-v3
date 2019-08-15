import { _SubnetList } from "./_SubnetList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReplicationSubnetGroup: _Structure_ = {
  type: "structure",
  required: [],
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
    VpcId: {
      shape: {
        type: "string"
      }
    },
    SubnetGroupStatus: {
      shape: {
        type: "string"
      }
    },
    Subnets: {
      shape: _SubnetList
    }
  }
};

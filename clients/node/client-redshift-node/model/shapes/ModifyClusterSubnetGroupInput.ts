import { _SubnetIdentifierList } from "./_SubnetIdentifierList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyClusterSubnetGroupInput: _Structure_ = {
  type: "structure",
  required: ["ClusterSubnetGroupName", "SubnetIds"],
  members: {
    ClusterSubnetGroupName: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    SubnetIds: {
      shape: _SubnetIdentifierList
    }
  }
};

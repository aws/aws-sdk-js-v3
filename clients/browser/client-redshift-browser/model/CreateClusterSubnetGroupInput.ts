import { _SubnetIdentifierList } from "./_SubnetIdentifierList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateClusterSubnetGroupInput: _Structure_ = {
  type: "structure",
  required: ["ClusterSubnetGroupName", "Description", "SubnetIds"],
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
    },
    Tags: {
      shape: _TagList
    }
  }
};

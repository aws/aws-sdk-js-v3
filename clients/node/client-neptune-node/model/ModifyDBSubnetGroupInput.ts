import { _SubnetIdentifierList } from "./_SubnetIdentifierList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyDBSubnetGroupInput: _Structure_ = {
  type: "structure",
  required: ["DBSubnetGroupName", "SubnetIds"],
  members: {
    DBSubnetGroupName: {
      shape: {
        type: "string"
      }
    },
    DBSubnetGroupDescription: {
      shape: {
        type: "string"
      }
    },
    SubnetIds: {
      shape: _SubnetIdentifierList
    }
  }
};

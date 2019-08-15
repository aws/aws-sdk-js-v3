import { _SubnetIdentifierList } from "./_SubnetIdentifierList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSubnetGroupInput: _Structure_ = {
  type: "structure",
  required: ["SubnetGroupName", "SubnetIds"],
  members: {
    SubnetGroupName: {
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

import { _SubnetIdentifierList } from "./_SubnetIdentifierList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateSubnetGroupInput: _Structure_ = {
  type: "structure",
  required: ["SubnetGroupName"],
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

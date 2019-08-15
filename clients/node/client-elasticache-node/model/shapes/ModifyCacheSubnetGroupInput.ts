import { _SubnetIdentifierList } from "./_SubnetIdentifierList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyCacheSubnetGroupInput: _Structure_ = {
  type: "structure",
  required: ["CacheSubnetGroupName"],
  members: {
    CacheSubnetGroupName: {
      shape: {
        type: "string"
      }
    },
    CacheSubnetGroupDescription: {
      shape: {
        type: "string"
      }
    },
    SubnetIds: {
      shape: _SubnetIdentifierList
    }
  }
};

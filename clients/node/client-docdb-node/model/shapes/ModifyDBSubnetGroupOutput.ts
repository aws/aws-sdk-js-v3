import { _DBSubnetGroup } from "./_DBSubnetGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyDBSubnetGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBSubnetGroup: {
      shape: _DBSubnetGroup
    }
  }
};

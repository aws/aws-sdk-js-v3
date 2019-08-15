import { _SubnetGroup } from "./_SubnetGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSubnetGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SubnetGroup: {
      shape: _SubnetGroup
    }
  }
};

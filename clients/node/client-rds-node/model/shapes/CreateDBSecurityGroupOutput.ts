import { _DBSecurityGroup } from "./_DBSecurityGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDBSecurityGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBSecurityGroup: {
      shape: _DBSecurityGroup
    }
  }
};

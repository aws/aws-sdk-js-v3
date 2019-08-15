import { _InputSecurityGroup } from "./_InputSecurityGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateInputSecurityGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SecurityGroup: {
      shape: _InputSecurityGroup,
      locationName: "securityGroup"
    }
  }
};

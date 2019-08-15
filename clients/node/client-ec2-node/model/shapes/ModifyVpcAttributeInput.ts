import { _AttributeBooleanValue } from "./_AttributeBooleanValue";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyVpcAttributeInput: _Structure_ = {
  type: "structure",
  required: ["VpcId"],
  members: {
    EnableDnsHostnames: {
      shape: _AttributeBooleanValue
    },
    EnableDnsSupport: {
      shape: _AttributeBooleanValue
    },
    VpcId: {
      shape: {
        type: "string"
      },
      locationName: "vpcId"
    }
  }
};

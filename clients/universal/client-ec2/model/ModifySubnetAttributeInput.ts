import { _AttributeBooleanValue } from "./_AttributeBooleanValue";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifySubnetAttributeInput: _Structure_ = {
  type: "structure",
  required: ["SubnetId"],
  members: {
    AssignIpv6AddressOnCreation: {
      shape: _AttributeBooleanValue
    },
    MapPublicIpOnLaunch: {
      shape: _AttributeBooleanValue
    },
    SubnetId: {
      shape: {
        type: "string"
      },
      locationName: "subnetId"
    }
  }
};

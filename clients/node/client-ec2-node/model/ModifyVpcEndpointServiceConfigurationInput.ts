import { _ValueStringList } from "./_ValueStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyVpcEndpointServiceConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["ServiceId"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    ServiceId: {
      shape: {
        type: "string"
      }
    },
    AcceptanceRequired: {
      shape: {
        type: "boolean"
      }
    },
    AddNetworkLoadBalancerArns: {
      shape: _ValueStringList,
      locationName: "AddNetworkLoadBalancerArn"
    },
    RemoveNetworkLoadBalancerArns: {
      shape: _ValueStringList,
      locationName: "RemoveNetworkLoadBalancerArn"
    }
  }
};

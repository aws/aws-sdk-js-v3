import { _ValueStringList } from "./_ValueStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateVpcEndpointServiceConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["NetworkLoadBalancerArns"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    AcceptanceRequired: {
      shape: {
        type: "boolean"
      }
    },
    NetworkLoadBalancerArns: {
      shape: _ValueStringList,
      locationName: "NetworkLoadBalancerArn"
    },
    ClientToken: {
      shape: {
        type: "string"
      }
    }
  }
};

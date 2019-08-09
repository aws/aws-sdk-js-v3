import { _TagList } from "./_TagList";
import { _PLSubnetArnList } from "./_PLSubnetArnList";
import { _PLSecurityGroupArnList } from "./_PLSecurityGroupArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateAgentInput: _Structure_ = {
  type: "structure",
  required: ["ActivationKey"],
  members: {
    ActivationKey: {
      shape: {
        type: "string"
      }
    },
    AgentName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Tags: {
      shape: _TagList
    },
    VpcEndpointId: {
      shape: {
        type: "string"
      }
    },
    SubnetArns: {
      shape: _PLSubnetArnList
    },
    SecurityGroupArns: {
      shape: _PLSecurityGroupArnList
    }
  }
};

import { _SimulationPolicyListType } from "./_SimulationPolicyListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetContextKeysForPrincipalPolicyInput: _Structure_ = {
  type: "structure",
  required: ["PolicySourceArn"],
  members: {
    PolicySourceArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    PolicyInputList: {
      shape: _SimulationPolicyListType
    }
  }
};

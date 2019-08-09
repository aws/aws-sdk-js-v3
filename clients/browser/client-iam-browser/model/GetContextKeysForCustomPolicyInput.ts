import { _SimulationPolicyListType } from "./_SimulationPolicyListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetContextKeysForCustomPolicyInput: _Structure_ = {
  type: "structure",
  required: ["PolicyInputList"],
  members: {
    PolicyInputList: {
      shape: _SimulationPolicyListType
    }
  }
};

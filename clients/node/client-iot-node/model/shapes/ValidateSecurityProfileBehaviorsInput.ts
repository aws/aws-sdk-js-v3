import { _Behaviors } from "./_Behaviors";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ValidateSecurityProfileBehaviorsInput: _Structure_ = {
  type: "structure",
  required: ["behaviors"],
  members: {
    behaviors: {
      shape: _Behaviors
    }
  }
};

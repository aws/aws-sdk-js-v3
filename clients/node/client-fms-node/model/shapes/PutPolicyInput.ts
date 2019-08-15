import { _Policy } from "./_Policy";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutPolicyInput: _Structure_ = {
  type: "structure",
  required: ["Policy"],
  members: {
    Policy: {
      shape: _Policy
    }
  }
};

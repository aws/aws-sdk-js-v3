import { ___listOfApplicationPolicyStatement } from "./___listOfApplicationPolicyStatement";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutApplicationPolicyOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Statements: {
      shape: ___listOfApplicationPolicyStatement,
      locationName: "statements"
    }
  }
};

import { ___listOfApplicationPolicyStatement } from "./___listOfApplicationPolicyStatement";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutApplicationPolicyInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationId", "Statements"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "applicationId"
    },
    Statements: {
      shape: ___listOfApplicationPolicyStatement,
      locationName: "statements"
    }
  }
};

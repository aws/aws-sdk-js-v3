import { ___listOf__string } from "./___listOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApplicationPolicyStatement: _Structure_ = {
  type: "structure",
  required: ["Principals", "Actions"],
  members: {
    Actions: {
      shape: ___listOf__string,
      locationName: "actions"
    },
    Principals: {
      shape: ___listOf__string,
      locationName: "principals"
    },
    StatementId: {
      shape: {
        type: "string"
      },
      locationName: "statementId"
    }
  }
};

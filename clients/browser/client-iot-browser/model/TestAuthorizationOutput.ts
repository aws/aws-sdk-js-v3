import { _AuthResults } from "./_AuthResults";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TestAuthorizationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    authResults: {
      shape: _AuthResults
    }
  }
};

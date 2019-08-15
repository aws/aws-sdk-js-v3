import { _CreateAccountStates } from "./_CreateAccountStates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListCreateAccountStatusInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    States: {
      shape: _CreateAccountStates
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};

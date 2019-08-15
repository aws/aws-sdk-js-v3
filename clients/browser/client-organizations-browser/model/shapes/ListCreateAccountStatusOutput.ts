import { _CreateAccountStatuses } from "./_CreateAccountStatuses";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListCreateAccountStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CreateAccountStatuses: {
      shape: _CreateAccountStatuses
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

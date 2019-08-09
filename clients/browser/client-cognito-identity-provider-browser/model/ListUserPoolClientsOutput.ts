import { _UserPoolClientListType } from "./_UserPoolClientListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListUserPoolClientsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserPoolClients: {
      shape: _UserPoolClientListType
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

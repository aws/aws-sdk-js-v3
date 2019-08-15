import { _PrincipalList } from "./_PrincipalList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPrincipalsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    principals: {
      shape: _PrincipalList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

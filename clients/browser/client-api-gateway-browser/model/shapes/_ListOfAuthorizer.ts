import { List as _List_ } from "@aws-sdk/types";
import { _Authorizer } from "./_Authorizer";

export const _ListOfAuthorizer: _List_ = {
  type: "list",
  member: {
    shape: _Authorizer
  }
};

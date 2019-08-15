import { List as _List_ } from "@aws-sdk/types";
import { _Credential } from "./_Credential";

export const _CredentialList: _List_ = {
  type: "list",
  member: {
    shape: _Credential
  }
};

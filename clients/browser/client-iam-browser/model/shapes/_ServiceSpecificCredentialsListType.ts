import { List as _List_ } from "@aws-sdk/types";
import { _ServiceSpecificCredentialMetadata } from "./_ServiceSpecificCredentialMetadata";

export const _ServiceSpecificCredentialsListType: _List_ = {
  type: "list",
  member: {
    shape: _ServiceSpecificCredentialMetadata
  }
};

import { List as _List_ } from "@aws-sdk/types";
import { _SAMLProviderListEntry } from "./_SAMLProviderListEntry";

export const _SAMLProviderListType: _List_ = {
  type: "list",
  member: {
    shape: _SAMLProviderListEntry
  }
};

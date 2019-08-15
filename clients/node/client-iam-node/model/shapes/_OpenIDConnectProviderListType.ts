import { List as _List_ } from "@aws-sdk/types";
import { _OpenIDConnectProviderListEntry } from "./_OpenIDConnectProviderListEntry";

export const _OpenIDConnectProviderListType: _List_ = {
  type: "list",
  member: {
    shape: _OpenIDConnectProviderListEntry
  }
};

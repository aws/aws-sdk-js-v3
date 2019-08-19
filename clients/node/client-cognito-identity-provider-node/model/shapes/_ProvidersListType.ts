import { List as _List_ } from "@aws-sdk/types";
import { _ProviderDescription } from "./_ProviderDescription";

export const _ProvidersListType: _List_ = {
  type: "list",
  member: {
    shape: _ProviderDescription
  }
};

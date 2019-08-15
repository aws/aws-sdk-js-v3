import { List as _List_ } from "@aws-sdk/types";
import { _AdditionalAuthenticationProvider } from "./_AdditionalAuthenticationProvider";

export const _AdditionalAuthenticationProviders: _List_ = {
  type: "list",
  member: {
    shape: _AdditionalAuthenticationProvider
  }
};

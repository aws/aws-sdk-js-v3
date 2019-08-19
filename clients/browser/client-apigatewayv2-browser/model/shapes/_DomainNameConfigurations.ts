import { List as _List_ } from "@aws-sdk/types";
import { _DomainNameConfiguration } from "./_DomainNameConfiguration";

export const _DomainNameConfigurations: _List_ = {
  type: "list",
  member: {
    shape: _DomainNameConfiguration
  }
};

import { List as _List_ } from "@aws-sdk/types";
import { _DhcpConfiguration } from "./_DhcpConfiguration";

export const _DhcpConfigurationList: _List_ = {
  type: "list",
  member: {
    shape: _DhcpConfiguration,
    locationName: "item"
  }
};

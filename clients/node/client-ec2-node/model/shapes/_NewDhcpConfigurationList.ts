import { List as _List_ } from "@aws-sdk/types";
import { _NewDhcpConfiguration } from "./_NewDhcpConfiguration";

export const _NewDhcpConfigurationList: _List_ = {
  type: "list",
  member: {
    shape: _NewDhcpConfiguration,
    locationName: "item"
  }
};

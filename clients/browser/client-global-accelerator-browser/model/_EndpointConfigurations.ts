import { List as _List_ } from "@aws-sdk/types";
import { _EndpointConfiguration } from "./_EndpointConfiguration";

export const _EndpointConfigurations: _List_ = {
  type: "list",
  member: {
    shape: _EndpointConfiguration
  }
};

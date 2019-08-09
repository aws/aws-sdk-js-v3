import { List as _List_ } from "@aws-sdk/types";
import { _VPCEConfiguration } from "./_VPCEConfiguration";

export const _VPCEConfigurations: _List_ = {
  type: "list",
  member: {
    shape: _VPCEConfiguration
  }
};

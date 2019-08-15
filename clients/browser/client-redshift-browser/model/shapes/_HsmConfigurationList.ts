import { List as _List_ } from "@aws-sdk/types";
import { _HsmConfiguration } from "./_HsmConfiguration";

export const _HsmConfigurationList: _List_ = {
  type: "list",
  member: {
    shape: _HsmConfiguration,
    locationName: "HsmConfiguration"
  }
};

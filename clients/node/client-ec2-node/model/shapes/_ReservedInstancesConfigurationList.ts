import { List as _List_ } from "@aws-sdk/types";
import { _ReservedInstancesConfiguration } from "./_ReservedInstancesConfiguration";

export const _ReservedInstancesConfigurationList: _List_ = {
  type: "list",
  member: {
    shape: _ReservedInstancesConfiguration,
    locationName: "item"
  }
};

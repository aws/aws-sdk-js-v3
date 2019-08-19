import { List as _List_ } from "@aws-sdk/types";
import { _ReshardingConfiguration } from "./_ReshardingConfiguration";

export const _ReshardingConfigurationList: _List_ = {
  type: "list",
  member: {
    shape: _ReshardingConfiguration,
    locationName: "ReshardingConfiguration"
  }
};

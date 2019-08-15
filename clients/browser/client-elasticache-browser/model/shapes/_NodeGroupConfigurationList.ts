import { List as _List_ } from "@aws-sdk/types";
import { _NodeGroupConfiguration } from "./_NodeGroupConfiguration";

export const _NodeGroupConfigurationList: _List_ = {
  type: "list",
  member: {
    shape: _NodeGroupConfiguration,
    locationName: "NodeGroupConfiguration"
  }
};

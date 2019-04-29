import { List as _List_ } from "@aws-sdk/types";
import { _InventoryConfiguration } from "./_InventoryConfiguration";

export const _InventoryConfigurationList: _List_ = {
  type: "list",
  flattened: true,
  member: {
    shape: _InventoryConfiguration
  }
};

import { List as _List_ } from "@aws-sdk/types";
import { _FleetAttributes } from "./_FleetAttributes";

export const _FleetAttributesList: _List_ = {
  type: "list",
  member: {
    shape: _FleetAttributes
  }
};

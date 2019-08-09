import { List as _List_ } from "@aws-sdk/types";
import { _OrderableDBInstanceOption } from "./_OrderableDBInstanceOption";

export const _OrderableDBInstanceOptionsList: _List_ = {
  type: "list",
  member: {
    shape: _OrderableDBInstanceOption,
    locationName: "OrderableDBInstanceOption"
  }
};

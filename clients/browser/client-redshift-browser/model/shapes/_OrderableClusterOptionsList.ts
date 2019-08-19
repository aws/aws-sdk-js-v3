import { List as _List_ } from "@aws-sdk/types";
import { _OrderableClusterOption } from "./_OrderableClusterOption";

export const _OrderableClusterOptionsList: _List_ = {
  type: "list",
  member: {
    shape: _OrderableClusterOption,
    locationName: "OrderableClusterOption"
  }
};

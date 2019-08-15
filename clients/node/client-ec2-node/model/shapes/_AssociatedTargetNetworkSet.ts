import { List as _List_ } from "@aws-sdk/types";
import { _AssociatedTargetNetwork } from "./_AssociatedTargetNetwork";

export const _AssociatedTargetNetworkSet: _List_ = {
  type: "list",
  member: {
    shape: _AssociatedTargetNetwork,
    locationName: "item"
  }
};

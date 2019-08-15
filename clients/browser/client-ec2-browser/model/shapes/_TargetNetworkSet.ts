import { List as _List_ } from "@aws-sdk/types";
import { _TargetNetwork } from "./_TargetNetwork";

export const _TargetNetworkSet: _List_ = {
  type: "list",
  member: {
    shape: _TargetNetwork,
    locationName: "item"
  }
};

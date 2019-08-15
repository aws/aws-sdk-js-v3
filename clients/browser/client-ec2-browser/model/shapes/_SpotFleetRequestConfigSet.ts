import { List as _List_ } from "@aws-sdk/types";
import { _SpotFleetRequestConfig } from "./_SpotFleetRequestConfig";

export const _SpotFleetRequestConfigSet: _List_ = {
  type: "list",
  member: {
    shape: _SpotFleetRequestConfig,
    locationName: "item"
  }
};

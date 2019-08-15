import { List as _List_ } from "@aws-sdk/types";
import { _CancelSpotFleetRequestsErrorItem } from "./_CancelSpotFleetRequestsErrorItem";

export const _CancelSpotFleetRequestsErrorSet: _List_ = {
  type: "list",
  member: {
    shape: _CancelSpotFleetRequestsErrorItem,
    locationName: "item"
  }
};

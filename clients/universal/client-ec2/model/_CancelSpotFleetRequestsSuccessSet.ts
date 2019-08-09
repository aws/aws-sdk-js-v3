import { List as _List_ } from "@aws-sdk/types";
import { _CancelSpotFleetRequestsSuccessItem } from "./_CancelSpotFleetRequestsSuccessItem";

export const _CancelSpotFleetRequestsSuccessSet: _List_ = {
  type: "list",
  member: {
    shape: _CancelSpotFleetRequestsSuccessItem,
    locationName: "item"
  }
};

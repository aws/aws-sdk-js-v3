import { List as _List_ } from "@aws-sdk/types";
import { _CancelledSpotInstanceRequest } from "./_CancelledSpotInstanceRequest";

export const _CancelledSpotInstanceRequestList: _List_ = {
  type: "list",
  member: {
    shape: _CancelledSpotInstanceRequest,
    locationName: "item"
  }
};

import { List as _List_ } from "@aws-sdk/types";
import { _SpotInstanceRequest } from "./_SpotInstanceRequest";

export const _SpotInstanceRequestList: _List_ = {
  type: "list",
  member: {
    shape: _SpotInstanceRequest,
    locationName: "item"
  }
};

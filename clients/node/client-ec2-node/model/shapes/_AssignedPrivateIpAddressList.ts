import { List as _List_ } from "@aws-sdk/types";
import { _AssignedPrivateIpAddress } from "./_AssignedPrivateIpAddress";

export const _AssignedPrivateIpAddressList: _List_ = {
  type: "list",
  member: {
    shape: _AssignedPrivateIpAddress,
    locationName: "item"
  }
};

import { List as _List_ } from "@aws-sdk/types";
import { _InstanceNetworkInterface } from "./_InstanceNetworkInterface";

export const _InstanceNetworkInterfaceList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceNetworkInterface,
    locationName: "item"
  }
};

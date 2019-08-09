import { List as _List_ } from "@aws-sdk/types";
import { _InstanceNetworkInterfaceSpecification } from "./_InstanceNetworkInterfaceSpecification";

export const _InstanceNetworkInterfaceSpecificationList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceNetworkInterfaceSpecification,
    locationName: "item"
  }
};

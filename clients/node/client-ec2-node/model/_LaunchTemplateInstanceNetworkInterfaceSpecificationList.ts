import { List as _List_ } from "@aws-sdk/types";
import { _LaunchTemplateInstanceNetworkInterfaceSpecification } from "./_LaunchTemplateInstanceNetworkInterfaceSpecification";

export const _LaunchTemplateInstanceNetworkInterfaceSpecificationList: _List_ = {
  type: "list",
  member: {
    shape: _LaunchTemplateInstanceNetworkInterfaceSpecification,
    locationName: "item"
  }
};

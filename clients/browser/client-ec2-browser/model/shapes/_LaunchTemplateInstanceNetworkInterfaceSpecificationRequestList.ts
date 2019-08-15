import { List as _List_ } from "@aws-sdk/types";
import { _LaunchTemplateInstanceNetworkInterfaceSpecificationRequest } from "./_LaunchTemplateInstanceNetworkInterfaceSpecificationRequest";

export const _LaunchTemplateInstanceNetworkInterfaceSpecificationRequestList: _List_ = {
  type: "list",
  member: {
    shape: _LaunchTemplateInstanceNetworkInterfaceSpecificationRequest,
    locationName: "InstanceNetworkInterfaceSpecification"
  }
};

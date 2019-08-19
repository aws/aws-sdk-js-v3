import { List as _List_ } from "@aws-sdk/types";
import { _InstanceBlockDeviceMappingSpecification } from "./_InstanceBlockDeviceMappingSpecification";

export const _InstanceBlockDeviceMappingSpecificationList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceBlockDeviceMappingSpecification,
    locationName: "item"
  }
};

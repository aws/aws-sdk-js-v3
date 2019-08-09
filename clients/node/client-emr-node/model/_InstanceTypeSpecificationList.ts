import { List as _List_ } from "@aws-sdk/types";
import { _InstanceTypeSpecification } from "./_InstanceTypeSpecification";

export const _InstanceTypeSpecificationList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceTypeSpecification
  }
};

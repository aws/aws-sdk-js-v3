import { List as _List_ } from "@aws-sdk/types";
import { _PrivateIpAddressSpecification } from "./_PrivateIpAddressSpecification";

export const _PrivateIpAddressSpecificationList: _List_ = {
  type: "list",
  member: {
    shape: _PrivateIpAddressSpecification,
    locationName: "item"
  }
};

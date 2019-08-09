import { List as _List_ } from "@aws-sdk/types";
import { _InstanceCreditSpecification } from "./_InstanceCreditSpecification";

export const _InstanceCreditSpecificationList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceCreditSpecification,
    locationName: "item"
  }
};

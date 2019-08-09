import { List as _List_ } from "@aws-sdk/types";
import { _InstanceCreditSpecificationRequest } from "./_InstanceCreditSpecificationRequest";

export const _InstanceCreditSpecificationListRequest: _List_ = {
  type: "list",
  member: {
    shape: _InstanceCreditSpecificationRequest,
    locationName: "item"
  }
};

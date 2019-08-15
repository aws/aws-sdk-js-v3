import { List as _List_ } from "@aws-sdk/types";
import { _SuccessfulInstanceCreditSpecificationItem } from "./_SuccessfulInstanceCreditSpecificationItem";

export const _SuccessfulInstanceCreditSpecificationSet: _List_ = {
  type: "list",
  member: {
    shape: _SuccessfulInstanceCreditSpecificationItem,
    locationName: "item"
  }
};

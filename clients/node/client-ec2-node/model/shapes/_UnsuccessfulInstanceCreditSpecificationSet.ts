import { List as _List_ } from "@aws-sdk/types";
import { _UnsuccessfulInstanceCreditSpecificationItem } from "./_UnsuccessfulInstanceCreditSpecificationItem";

export const _UnsuccessfulInstanceCreditSpecificationSet: _List_ = {
  type: "list",
  member: {
    shape: _UnsuccessfulInstanceCreditSpecificationItem,
    locationName: "item"
  }
};

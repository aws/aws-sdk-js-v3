import { List as _List_ } from "@aws-sdk/types";
import { _PriceScheduleSpecification } from "./_PriceScheduleSpecification";

export const _PriceScheduleSpecificationList: _List_ = {
  type: "list",
  member: {
    shape: _PriceScheduleSpecification,
    locationName: "item"
  }
};

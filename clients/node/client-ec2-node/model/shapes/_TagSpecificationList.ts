import { List as _List_ } from "@aws-sdk/types";
import { _TagSpecification } from "./_TagSpecification";

export const _TagSpecificationList: _List_ = {
  type: "list",
  member: {
    shape: _TagSpecification,
    locationName: "item"
  }
};

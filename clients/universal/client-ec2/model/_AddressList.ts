import { List as _List_ } from "@aws-sdk/types";
import { _Address } from "./_Address";

export const _AddressList: _List_ = {
  type: "list",
  member: {
    shape: _Address,
    locationName: "item"
  }
};

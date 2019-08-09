import { List as _List_ } from "@aws-sdk/types";
import { _MovingAddressStatus } from "./_MovingAddressStatus";

export const _MovingAddressStatusSet: _List_ = {
  type: "list",
  member: {
    shape: _MovingAddressStatus,
    locationName: "item"
  }
};

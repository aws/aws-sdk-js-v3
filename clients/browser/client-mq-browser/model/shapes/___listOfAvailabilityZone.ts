import { List as _List_ } from "@aws-sdk/types";
import { _AvailabilityZone } from "./_AvailabilityZone";

export const ___listOfAvailabilityZone: _List_ = {
  type: "list",
  member: {
    shape: _AvailabilityZone
  }
};

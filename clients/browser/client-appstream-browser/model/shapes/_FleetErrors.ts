import { List as _List_ } from "@aws-sdk/types";
import { _FleetError } from "./_FleetError";

export const _FleetErrors: _List_ = {
  type: "list",
  member: {
    shape: _FleetError
  }
};

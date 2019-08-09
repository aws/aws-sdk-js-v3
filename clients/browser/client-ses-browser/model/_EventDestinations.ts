import { List as _List_ } from "@aws-sdk/types";
import { _EventDestination } from "./_EventDestination";

export const _EventDestinations: _List_ = {
  type: "list",
  member: {
    shape: _EventDestination
  }
};

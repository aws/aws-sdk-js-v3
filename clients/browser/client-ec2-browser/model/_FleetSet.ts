import { List as _List_ } from "@aws-sdk/types";
import { _FleetData } from "./_FleetData";

export const _FleetSet: _List_ = {
  type: "list",
  member: {
    shape: _FleetData,
    locationName: "item"
  }
};

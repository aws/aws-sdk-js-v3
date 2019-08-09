import { List as _List_ } from "@aws-sdk/types";
import { _SatelliteListItem } from "./_SatelliteListItem";

export const _SatelliteList: _List_ = {
  type: "list",
  member: {
    shape: _SatelliteListItem
  }
};

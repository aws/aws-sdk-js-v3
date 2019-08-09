import { List as _List_ } from "@aws-sdk/types";
import { _GroundStationData } from "./_GroundStationData";

export const _GroundStationList: _List_ = {
  type: "list",
  member: {
    shape: _GroundStationData
  }
};

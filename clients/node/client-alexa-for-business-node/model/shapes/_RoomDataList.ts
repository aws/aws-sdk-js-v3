import { List as _List_ } from "@aws-sdk/types";
import { _RoomData } from "./_RoomData";

export const _RoomDataList: _List_ = {
  type: "list",
  member: {
    shape: _RoomData
  }
};

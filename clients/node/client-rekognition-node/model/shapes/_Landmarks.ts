import { List as _List_ } from "@aws-sdk/types";
import { _Landmark } from "./_Landmark";

export const _Landmarks: _List_ = {
  type: "list",
  member: {
    shape: _Landmark
  }
};

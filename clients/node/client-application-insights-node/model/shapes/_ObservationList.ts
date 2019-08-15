import { List as _List_ } from "@aws-sdk/types";
import { _Observation } from "./_Observation";

export const _ObservationList: _List_ = {
  type: "list",
  member: {
    shape: _Observation
  }
};

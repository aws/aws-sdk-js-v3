import { List as _List_ } from "@aws-sdk/types";
import { _NeighborConnectionDetail } from "./_NeighborConnectionDetail";

export const _NeighborDetailsList: _List_ = {
  type: "list",
  member: {
    shape: _NeighborConnectionDetail
  }
};

import { List as _List_ } from "@aws-sdk/types";
import { _DBClusterBacktrack } from "./_DBClusterBacktrack";

export const _DBClusterBacktrackList: _List_ = {
  type: "list",
  member: {
    shape: _DBClusterBacktrack,
    locationName: "DBClusterBacktrack"
  }
};

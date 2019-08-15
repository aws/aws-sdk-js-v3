import { List as _List_ } from "@aws-sdk/types";
import { _DBEngineVersion } from "./_DBEngineVersion";

export const _DBEngineVersionList: _List_ = {
  type: "list",
  member: {
    shape: _DBEngineVersion,
    locationName: "DBEngineVersion"
  }
};

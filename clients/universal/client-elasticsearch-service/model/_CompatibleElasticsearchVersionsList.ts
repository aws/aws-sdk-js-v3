import { List as _List_ } from "@aws-sdk/types";
import { _CompatibleVersionsMap } from "./_CompatibleVersionsMap";

export const _CompatibleElasticsearchVersionsList: _List_ = {
  type: "list",
  member: {
    shape: _CompatibleVersionsMap
  }
};

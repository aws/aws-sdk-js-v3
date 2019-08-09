import { List as _List_ } from "@aws-sdk/types";
import { _SourceConfig } from "./_SourceConfig";

export const _SourceConfigs: _List_ = {
  type: "list",
  member: {
    shape: _SourceConfig
  }
};

import { List as _List_ } from "@aws-sdk/types";
import { _SuggesterStatus } from "./_SuggesterStatus";

export const _SuggesterStatusList: _List_ = {
  type: "list",
  member: {
    shape: _SuggesterStatus
  }
};

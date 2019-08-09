import { List as _List_ } from "@aws-sdk/types";
import { _RelationalDatabaseParameter } from "./_RelationalDatabaseParameter";

export const _RelationalDatabaseParameterList: _List_ = {
  type: "list",
  member: {
    shape: _RelationalDatabaseParameter
  }
};

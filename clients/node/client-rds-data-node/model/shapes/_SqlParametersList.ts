import { List as _List_ } from "@aws-sdk/types";
import { _SqlParameter } from "./_SqlParameter";

export const _SqlParametersList: _List_ = {
  type: "list",
  member: {
    shape: _SqlParameter
  }
};

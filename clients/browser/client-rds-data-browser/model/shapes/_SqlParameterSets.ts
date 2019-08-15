import { List as _List_ } from "@aws-sdk/types";
import { _SqlParametersList } from "./_SqlParametersList";

export const _SqlParameterSets: _List_ = {
  type: "list",
  member: {
    shape: _SqlParametersList
  }
};

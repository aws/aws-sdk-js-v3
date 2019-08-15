import { List as _List_ } from "@aws-sdk/types";
import { _Parameter } from "./_Parameter";

export const _ParametersList: _List_ = {
  type: "list",
  member: {
    shape: _Parameter,
    locationName: "Parameter"
  }
};

import { List as _List_ } from "@aws-sdk/types";
import { _EnvironmentDescription } from "./_EnvironmentDescription";

export const _EnvironmentDescriptionsList: _List_ = {
  type: "list",
  member: {
    shape: _EnvironmentDescription
  }
};

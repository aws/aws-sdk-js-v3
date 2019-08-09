import { List as _List_ } from "@aws-sdk/types";
import { _EnvironmentVariable } from "./_EnvironmentVariable";

export const _EnvironmentVariables: _List_ = {
  type: "list",
  member: {
    shape: _EnvironmentVariable
  }
};

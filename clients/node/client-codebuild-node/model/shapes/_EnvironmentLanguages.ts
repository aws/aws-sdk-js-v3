import { List as _List_ } from "@aws-sdk/types";
import { _EnvironmentLanguage } from "./_EnvironmentLanguage";

export const _EnvironmentLanguages: _List_ = {
  type: "list",
  member: {
    shape: _EnvironmentLanguage
  }
};

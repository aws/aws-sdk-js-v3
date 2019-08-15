import { List as _List_ } from "@aws-sdk/types";
import { _Contributor } from "./_Contributor";

export const _TopContributors: _List_ = {
  type: "list",
  member: {
    shape: _Contributor
  }
};

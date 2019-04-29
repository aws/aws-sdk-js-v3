import { List as _List_ } from "@aws-sdk/types";
import { _RepositoryTrigger } from "./_RepositoryTrigger";

export const _RepositoryTriggersList: _List_ = {
  type: "list",
  member: {
    shape: _RepositoryTrigger
  }
};

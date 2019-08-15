import { List as _List_ } from "@aws-sdk/types";
import { _Repository } from "./_Repository";

export const _RepositoryList: _List_ = {
  type: "list",
  member: {
    shape: _Repository
  }
};

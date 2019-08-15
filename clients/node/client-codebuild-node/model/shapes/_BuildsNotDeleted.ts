import { List as _List_ } from "@aws-sdk/types";
import { _BuildNotDeleted } from "./_BuildNotDeleted";

export const _BuildsNotDeleted: _List_ = {
  type: "list",
  member: {
    shape: _BuildNotDeleted
  }
};

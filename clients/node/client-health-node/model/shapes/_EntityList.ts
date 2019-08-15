import { List as _List_ } from "@aws-sdk/types";
import { _AffectedEntity } from "./_AffectedEntity";

export const _EntityList: _List_ = {
  type: "list",
  member: {
    shape: _AffectedEntity
  }
};

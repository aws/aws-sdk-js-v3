import { List as _List_ } from "@aws-sdk/types";
import { _PatchOperation } from "./_PatchOperation";

export const _ListOfPatchOperation: _List_ = {
  type: "list",
  member: {
    shape: _PatchOperation
  }
};

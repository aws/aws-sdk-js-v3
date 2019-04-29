import { List as _List_ } from "@aws-sdk/types";
import { _ActivityResponse } from "./_ActivityResponse";

export const _ListOfActivityResponse: _List_ = {
  type: "list",
  member: {
    shape: _ActivityResponse
  }
};

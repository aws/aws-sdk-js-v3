import { List as _List_ } from "@aws-sdk/types";
import { _RequestValidator } from "./_RequestValidator";

export const _ListOfRequestValidator: _List_ = {
  type: "list",
  member: {
    shape: _RequestValidator
  }
};

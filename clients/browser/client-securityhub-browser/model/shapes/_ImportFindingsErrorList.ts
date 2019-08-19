import { List as _List_ } from "@aws-sdk/types";
import { _ImportFindingsError } from "./_ImportFindingsError";

export const _ImportFindingsErrorList: _List_ = {
  type: "list",
  member: {
    shape: _ImportFindingsError
  }
};

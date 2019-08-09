import { List as _List_ } from "@aws-sdk/types";
import { _DocumentServiceWarning } from "./_DocumentServiceWarning";

export const _DocumentServiceWarnings: _List_ = {
  type: "list",
  member: {
    shape: _DocumentServiceWarning
  }
};

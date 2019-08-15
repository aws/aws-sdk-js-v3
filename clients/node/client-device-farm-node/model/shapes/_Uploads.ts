import { List as _List_ } from "@aws-sdk/types";
import { _Upload } from "./_Upload";

export const _Uploads: _List_ = {
  type: "list",
  member: {
    shape: _Upload
  }
};

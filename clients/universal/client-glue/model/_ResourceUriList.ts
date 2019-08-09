import { List as _List_ } from "@aws-sdk/types";
import { _ResourceUri } from "./_ResourceUri";

export const _ResourceUriList: _List_ = {
  type: "list",
  member: {
    shape: _ResourceUri
  }
};

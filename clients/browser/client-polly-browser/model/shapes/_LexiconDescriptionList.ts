import { List as _List_ } from "@aws-sdk/types";
import { _LexiconDescription } from "./_LexiconDescription";

export const _LexiconDescriptionList: _List_ = {
  type: "list",
  member: {
    shape: _LexiconDescription
  }
};

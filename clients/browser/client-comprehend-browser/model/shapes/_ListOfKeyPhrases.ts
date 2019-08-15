import { List as _List_ } from "@aws-sdk/types";
import { _KeyPhrase } from "./_KeyPhrase";

export const _ListOfKeyPhrases: _List_ = {
  type: "list",
  member: {
    shape: _KeyPhrase
  }
};

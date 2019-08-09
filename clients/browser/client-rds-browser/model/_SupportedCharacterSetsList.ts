import { List as _List_ } from "@aws-sdk/types";
import { _CharacterSet } from "./_CharacterSet";

export const _SupportedCharacterSetsList: _List_ = {
  type: "list",
  member: {
    shape: _CharacterSet,
    locationName: "CharacterSet"
  }
};

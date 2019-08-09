import { List as _List_ } from "@aws-sdk/types";
import { _EngineAttribute } from "./_EngineAttribute";

export const _EngineAttributes: _List_ = {
  type: "list",
  member: {
    shape: _EngineAttribute
  }
};

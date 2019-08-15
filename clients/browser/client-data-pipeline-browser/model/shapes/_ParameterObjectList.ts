import { List as _List_ } from "@aws-sdk/types";
import { _ParameterObject } from "./_ParameterObject";

export const _ParameterObjectList: _List_ = {
  type: "list",
  member: {
    shape: _ParameterObject
  }
};

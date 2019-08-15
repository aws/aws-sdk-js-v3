import { List as _List_ } from "@aws-sdk/types";
import { _ProcessorParameter } from "./_ProcessorParameter";

export const _ProcessorParameterList: _List_ = {
  type: "list",
  member: {
    shape: _ProcessorParameter
  }
};

import { List as _List_ } from "@aws-sdk/types";
import { _Processor } from "./_Processor";

export const _ProcessorList: _List_ = {
  type: "list",
  member: {
    shape: _Processor
  }
};

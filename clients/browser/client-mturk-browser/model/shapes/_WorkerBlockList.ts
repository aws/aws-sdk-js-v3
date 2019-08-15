import { List as _List_ } from "@aws-sdk/types";
import { _WorkerBlock } from "./_WorkerBlock";

export const _WorkerBlockList: _List_ = {
  type: "list",
  member: {
    shape: _WorkerBlock
  }
};

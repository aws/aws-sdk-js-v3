import { List as _List_ } from "@aws-sdk/types";
import { _PartitionError } from "./_PartitionError";

export const _PartitionErrors: _List_ = {
  type: "list",
  member: {
    shape: _PartitionError
  }
};

import { List as _List_ } from "@aws-sdk/types";
import { _Command } from "./_Command";

export const _CommandList: _List_ = {
  type: "list",
  member: {
    shape: _Command
  }
};

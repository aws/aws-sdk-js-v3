import { List as _List_ } from "@aws-sdk/types";
import { _LogSetup } from "./_LogSetup";

export const _LogSetups: _List_ = {
  type: "list",
  member: {
    shape: _LogSetup
  }
};

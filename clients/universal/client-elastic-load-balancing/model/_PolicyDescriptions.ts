import { List as _List_ } from "@aws-sdk/types";
import { _PolicyDescription } from "./_PolicyDescription";

export const _PolicyDescriptions: _List_ = {
  type: "list",
  member: {
    shape: _PolicyDescription
  }
};

import { List as _List_ } from "@aws-sdk/types";
import { _DirectoryDescription } from "./_DirectoryDescription";

export const _DirectoryDescriptions: _List_ = {
  type: "list",
  member: {
    shape: _DirectoryDescription
  }
};

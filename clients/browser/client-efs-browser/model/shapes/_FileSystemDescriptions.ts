import { List as _List_ } from "@aws-sdk/types";
import { _FileSystemDescription } from "./_FileSystemDescription";

export const _FileSystemDescriptions: _List_ = {
  type: "list",
  member: {
    shape: _FileSystemDescription
  }
};

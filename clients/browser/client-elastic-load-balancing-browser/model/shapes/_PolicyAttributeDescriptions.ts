import { List as _List_ } from "@aws-sdk/types";
import { _PolicyAttributeDescription } from "./_PolicyAttributeDescription";

export const _PolicyAttributeDescriptions: _List_ = {
  type: "list",
  member: {
    shape: _PolicyAttributeDescription
  }
};

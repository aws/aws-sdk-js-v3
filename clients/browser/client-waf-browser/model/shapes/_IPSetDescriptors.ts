import { List as _List_ } from "@aws-sdk/types";
import { _IPSetDescriptor } from "./_IPSetDescriptor";

export const _IPSetDescriptors: _List_ = {
  type: "list",
  member: {
    shape: _IPSetDescriptor
  }
};

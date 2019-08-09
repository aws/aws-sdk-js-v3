import { List as _List_ } from "@aws-sdk/types";
import { _JobListDescriptor } from "./_JobListDescriptor";

export const _JobListDescriptorList: _List_ = {
  type: "list",
  member: {
    shape: _JobListDescriptor
  }
};

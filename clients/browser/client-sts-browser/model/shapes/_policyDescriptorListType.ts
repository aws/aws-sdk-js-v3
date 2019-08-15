import { List as _List_ } from "@aws-sdk/types";
import { _PolicyDescriptorType } from "./_PolicyDescriptorType";

export const _policyDescriptorListType: _List_ = {
  type: "list",
  member: {
    shape: _PolicyDescriptorType
  }
};

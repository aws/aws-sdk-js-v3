import { List as _List_ } from "@aws-sdk/types";
import { _BundleDetails } from "./_BundleDetails";

export const _BundleList: _List_ = {
  type: "list",
  member: {
    shape: _BundleDetails
  }
};

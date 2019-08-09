import { List as _List_ } from "@aws-sdk/types";
import { _ExtendedKeyUsage } from "./_ExtendedKeyUsage";

export const _ExtendedKeyUsageList: _List_ = {
  type: "list",
  member: {
    shape: _ExtendedKeyUsage
  }
};

import { List as _List_ } from "@aws-sdk/types";
import { _ProvisionedProductAttribute } from "./_ProvisionedProductAttribute";

export const _ProvisionedProductAttributes: _List_ = {
  type: "list",
  member: {
    shape: _ProvisionedProductAttribute
  }
};

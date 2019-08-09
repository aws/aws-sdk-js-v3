import { List as _List_ } from "@aws-sdk/types";
import { _ProvisionedProductDetail } from "./_ProvisionedProductDetail";

export const _ProvisionedProductDetails: _List_ = {
  type: "list",
  member: {
    shape: _ProvisionedProductDetail
  }
};

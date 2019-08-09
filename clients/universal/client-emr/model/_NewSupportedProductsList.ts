import { List as _List_ } from "@aws-sdk/types";
import { _SupportedProductConfig } from "./_SupportedProductConfig";

export const _NewSupportedProductsList: _List_ = {
  type: "list",
  member: {
    shape: _SupportedProductConfig
  }
};

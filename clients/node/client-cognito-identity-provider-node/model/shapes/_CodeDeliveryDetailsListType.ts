import { List as _List_ } from "@aws-sdk/types";
import { _CodeDeliveryDetailsType } from "./_CodeDeliveryDetailsType";

export const _CodeDeliveryDetailsListType: _List_ = {
  type: "list",
  member: {
    shape: _CodeDeliveryDetailsType
  }
};

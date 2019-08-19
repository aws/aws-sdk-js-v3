import { List as _List_ } from "@aws-sdk/types";
import { _BonusPayment } from "./_BonusPayment";

export const _BonusPaymentList: _List_ = {
  type: "list",
  member: {
    shape: _BonusPayment
  }
};

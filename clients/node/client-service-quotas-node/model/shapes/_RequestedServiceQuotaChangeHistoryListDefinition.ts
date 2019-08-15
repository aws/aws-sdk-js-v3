import { List as _List_ } from "@aws-sdk/types";
import { _RequestedServiceQuotaChange } from "./_RequestedServiceQuotaChange";

export const _RequestedServiceQuotaChangeHistoryListDefinition: _List_ = {
  type: "list",
  member: {
    shape: _RequestedServiceQuotaChange
  }
};

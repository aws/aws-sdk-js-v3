import { _RequestedServiceQuotaChange } from "./_RequestedServiceQuotaChange";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RequestServiceQuotaIncreaseOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RequestedQuota: {
      shape: _RequestedServiceQuotaChange
    }
  }
};

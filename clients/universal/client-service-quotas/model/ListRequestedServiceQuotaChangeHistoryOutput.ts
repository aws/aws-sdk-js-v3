import { _RequestedServiceQuotaChangeHistoryListDefinition } from "./_RequestedServiceQuotaChangeHistoryListDefinition";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRequestedServiceQuotaChangeHistoryOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    RequestedQuotas: {
      shape: _RequestedServiceQuotaChangeHistoryListDefinition
    }
  }
};

import { _ServiceQuotaIncreaseRequestInTemplateList } from "./_ServiceQuotaIncreaseRequestInTemplateList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListServiceQuotaIncreaseRequestsInTemplateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceQuotaIncreaseRequestInTemplateList: {
      shape: _ServiceQuotaIncreaseRequestInTemplateList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

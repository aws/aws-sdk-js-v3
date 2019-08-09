import { _ServiceQuotaListDefinition } from "./_ServiceQuotaListDefinition";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAWSDefaultServiceQuotasOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    Quotas: {
      shape: _ServiceQuotaListDefinition
    }
  }
};

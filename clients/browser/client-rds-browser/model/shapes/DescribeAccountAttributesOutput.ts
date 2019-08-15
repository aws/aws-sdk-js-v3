import { _AccountQuotaList } from "./_AccountQuotaList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAccountAttributesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccountQuotas: {
      shape: _AccountQuotaList
    }
  }
};

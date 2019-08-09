import { _LimitsByRole } from "./_LimitsByRole";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeElasticsearchInstanceTypeLimitsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LimitsByRole: {
      shape: _LimitsByRole
    }
  }
};

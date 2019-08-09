import { _AwsSecurityFindingFilters } from "./_AwsSecurityFindingFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Insight: _Structure_ = {
  type: "structure",
  required: ["InsightArn", "Name", "Filters", "GroupByAttribute"],
  members: {
    InsightArn: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Filters: {
      shape: _AwsSecurityFindingFilters
    },
    GroupByAttribute: {
      shape: {
        type: "string"
      }
    }
  }
};

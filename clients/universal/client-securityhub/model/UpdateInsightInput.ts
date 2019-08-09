import { _AwsSecurityFindingFilters } from "./_AwsSecurityFindingFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateInsightInput: _Structure_ = {
  type: "structure",
  required: ["InsightArn"],
  members: {
    InsightArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "InsightArn"
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

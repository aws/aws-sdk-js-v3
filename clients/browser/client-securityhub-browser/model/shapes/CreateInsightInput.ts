import { _AwsSecurityFindingFilters } from "./_AwsSecurityFindingFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateInsightInput: _Structure_ = {
  type: "structure",
  required: ["Name", "Filters", "GroupByAttribute"],
  members: {
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

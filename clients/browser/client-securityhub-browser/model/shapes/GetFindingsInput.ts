import { _AwsSecurityFindingFilters } from "./_AwsSecurityFindingFilters";
import { _SortCriteria } from "./_SortCriteria";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFindingsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _AwsSecurityFindingFilters
    },
    SortCriteria: {
      shape: _SortCriteria
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};

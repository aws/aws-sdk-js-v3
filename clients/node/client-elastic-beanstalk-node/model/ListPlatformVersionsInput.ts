import { _PlatformFilters } from "./_PlatformFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPlatformVersionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _PlatformFilters
    },
    MaxRecords: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

import { _DhcpOptionsIdStringList } from "./_DhcpOptionsIdStringList";
import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDhcpOptionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DhcpOptionsIds: {
      shape: _DhcpOptionsIdStringList,
      locationName: "DhcpOptionsId"
    },
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 5
      }
    }
  }
};

import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVpcEndpointServicePermissionsInput: _Structure_ = {
  type: "structure",
  required: ["ServiceId"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    ServiceId: {
      shape: {
        type: "string"
      }
    },
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};

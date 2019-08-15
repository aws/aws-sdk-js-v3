import { _FilterList } from "./_FilterList";
import { _NetworkInterfaceIdList } from "./_NetworkInterfaceIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeNetworkInterfacesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _FilterList,
      locationName: "filter"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    NetworkInterfaceIds: {
      shape: _NetworkInterfaceIdList,
      locationName: "NetworkInterfaceId"
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

import { _FilterList } from "./_FilterList";
import { _RequestHostIdList } from "./_RequestHostIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeHostsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filter: {
      shape: _FilterList,
      locationName: "filter"
    },
    HostIds: {
      shape: _RequestHostIdList,
      locationName: "hostId"
    },
    MaxResults: {
      shape: {
        type: "integer"
      },
      locationName: "maxResults"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};

import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVpcEndpointConnectionNotificationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    ConnectionNotificationId: {
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

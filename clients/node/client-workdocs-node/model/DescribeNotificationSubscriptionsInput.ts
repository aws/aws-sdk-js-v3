import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeNotificationSubscriptionsInput: _Structure_ = {
  type: "structure",
  required: ["OrganizationId"],
  members: {
    OrganizationId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "OrganizationId"
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "marker"
    },
    Limit: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "limit"
    }
  }
};

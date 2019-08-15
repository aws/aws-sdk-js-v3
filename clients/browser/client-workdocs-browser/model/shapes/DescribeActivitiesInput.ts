import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeActivitiesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AuthenticationToken: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      },
      location: "header",
      locationName: "Authentication"
    },
    StartTime: {
      shape: {
        type: "timestamp"
      },
      location: "querystring",
      locationName: "startTime"
    },
    EndTime: {
      shape: {
        type: "timestamp"
      },
      location: "querystring",
      locationName: "endTime"
    },
    OrganizationId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "organizationId"
    },
    ActivityTypes: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "activityTypes"
    },
    ResourceId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "resourceId"
    },
    UserId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "userId"
    },
    IncludeIndirectActivities: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "includeIndirectActivities"
    },
    Limit: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "limit"
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "marker"
    }
  }
};

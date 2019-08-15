import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDashboardEmbedUrlInput: _Structure_ = {
  type: "structure",
  required: ["AwsAccountId", "DashboardId", "IdentityType"],
  members: {
    AwsAccountId: {
      shape: {
        type: "string",
        min: 12
      },
      location: "uri",
      locationName: "AwsAccountId"
    },
    DashboardId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "DashboardId"
    },
    IdentityType: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "creds-type"
    },
    SessionLifetimeInMinutes: {
      shape: {
        type: "integer",
        min: 15
      },
      location: "querystring",
      locationName: "session-lifetime"
    },
    UndoRedoDisabled: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "undo-redo-disabled"
    },
    ResetDisabled: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "reset-disabled"
    },
    UserArn: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "user-arn"
    }
  }
};

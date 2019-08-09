import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AnalyticsConfigurationType: _Structure_ = {
  type: "structure",
  required: ["ApplicationId", "RoleArn", "ExternalId"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      }
    },
    RoleArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    ExternalId: {
      shape: {
        type: "string"
      }
    },
    UserDataShared: {
      shape: {
        type: "boolean"
      }
    }
  }
};

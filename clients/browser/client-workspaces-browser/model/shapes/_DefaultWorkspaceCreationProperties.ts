import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DefaultWorkspaceCreationProperties: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EnableWorkDocs: {
      shape: {
        type: "boolean"
      }
    },
    EnableInternetAccess: {
      shape: {
        type: "boolean"
      }
    },
    DefaultOu: {
      shape: {
        type: "string"
      }
    },
    CustomSecurityGroupId: {
      shape: {
        type: "string"
      }
    },
    UserEnabledAsLocalAdministrator: {
      shape: {
        type: "boolean"
      }
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterUserInput: _Structure_ = {
  type: "structure",
  required: ["IdentityType", "Email", "UserRole", "AwsAccountId", "Namespace"],
  members: {
    IdentityType: {
      shape: {
        type: "string"
      }
    },
    Email: {
      shape: {
        type: "string"
      }
    },
    UserRole: {
      shape: {
        type: "string"
      }
    },
    IamArn: {
      shape: {
        type: "string"
      }
    },
    SessionName: {
      shape: {
        type: "string",
        min: 2
      }
    },
    AwsAccountId: {
      shape: {
        type: "string",
        min: 12
      },
      location: "uri",
      locationName: "AwsAccountId"
    },
    Namespace: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Namespace"
    },
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};

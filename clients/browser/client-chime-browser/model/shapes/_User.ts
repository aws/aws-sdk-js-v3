import { Structure as _Structure_ } from "@aws-sdk/types";

export const _User: _Structure_ = {
  type: "structure",
  required: ["UserId"],
  members: {
    UserId: {
      shape: {
        type: "string"
      }
    },
    AccountId: {
      shape: {
        type: "string"
      }
    },
    PrimaryEmail: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    PrimaryProvisionedNumber: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    DisplayName: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    LicenseType: {
      shape: {
        type: "string"
      }
    },
    UserRegistrationStatus: {
      shape: {
        type: "string"
      }
    },
    UserInvitationStatus: {
      shape: {
        type: "string"
      }
    },
    RegisteredOn: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      }
    },
    InvitedOn: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      }
    },
    PersonalPIN: {
      shape: {
        type: "string"
      }
    }
  }
};

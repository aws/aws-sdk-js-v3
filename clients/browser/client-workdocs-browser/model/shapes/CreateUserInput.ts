import { _StorageRuleType } from "./_StorageRuleType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateUserInput: _Structure_ = {
  type: "structure",
  required: ["Username", "GivenName", "Surname", "Password"],
  members: {
    OrganizationId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Username: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EmailAddress: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GivenName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Surname: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Password: {
      shape: {
        type: "string",
        sensitive: true,
        min: 4
      }
    },
    TimeZoneId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StorageRule: {
      shape: _StorageRuleType
    },
    AuthenticationToken: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      },
      location: "header",
      locationName: "Authentication"
    }
  }
};

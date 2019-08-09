import { _StorageRuleType } from "./_StorageRuleType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateUserInput: _Structure_ = {
  type: "structure",
  required: ["UserId"],
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
    UserId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "UserId"
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
    Type: {
      shape: {
        type: "string"
      }
    },
    StorageRule: {
      shape: _StorageRuleType
    },
    TimeZoneId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Locale: {
      shape: {
        type: "string"
      }
    },
    GrantPoweruserPrivileges: {
      shape: {
        type: "string"
      }
    }
  }
};

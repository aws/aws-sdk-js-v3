import { _UserIdentityInfo } from "./_UserIdentityInfo";
import { _UserPhoneConfig } from "./_UserPhoneConfig";
import { _SecurityProfileIds } from "./_SecurityProfileIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateUserInput: _Structure_ = {
  type: "structure",
  required: [
    "Username",
    "PhoneConfig",
    "SecurityProfileIds",
    "RoutingProfileId",
    "InstanceId"
  ],
  members: {
    Username: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Password: {
      shape: {
        type: "string"
      }
    },
    IdentityInfo: {
      shape: _UserIdentityInfo
    },
    PhoneConfig: {
      shape: _UserPhoneConfig
    },
    DirectoryUserId: {
      shape: {
        type: "string"
      }
    },
    SecurityProfileIds: {
      shape: _SecurityProfileIds
    },
    RoutingProfileId: {
      shape: {
        type: "string"
      }
    },
    HierarchyGroupId: {
      shape: {
        type: "string"
      }
    },
    InstanceId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "InstanceId"
    }
  }
};

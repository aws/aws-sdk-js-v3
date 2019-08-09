import { _UserIdentityInfo } from "./_UserIdentityInfo";
import { _UserPhoneConfig } from "./_UserPhoneConfig";
import { _SecurityProfileIds } from "./_SecurityProfileIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _User: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Arn: {
      shape: {
        type: "string"
      }
    },
    Username: {
      shape: {
        type: "string",
        min: 1
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
    }
  }
};

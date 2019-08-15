import { _MemberDefinitions } from "./_MemberDefinitions";
import { _ProductListings } from "./_ProductListings";
import { _NotificationConfiguration } from "./_NotificationConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Workteam: _Structure_ = {
  type: "structure",
  required: ["WorkteamName", "MemberDefinitions", "WorkteamArn", "Description"],
  members: {
    WorkteamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MemberDefinitions: {
      shape: _MemberDefinitions
    },
    WorkteamArn: {
      shape: {
        type: "string"
      }
    },
    ProductListingIds: {
      shape: _ProductListings
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SubDomain: {
      shape: {
        type: "string"
      }
    },
    CreateDate: {
      shape: {
        type: "timestamp"
      }
    },
    LastUpdatedDate: {
      shape: {
        type: "timestamp"
      }
    },
    NotificationConfiguration: {
      shape: _NotificationConfiguration
    }
  }
};

import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SubscribedWorkteam: _Structure_ = {
  type: "structure",
  required: ["WorkteamArn"],
  members: {
    WorkteamArn: {
      shape: {
        type: "string"
      }
    },
    MarketplaceTitle: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SellerName: {
      shape: {
        type: "string"
      }
    },
    MarketplaceDescription: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ListingId: {
      shape: {
        type: "string"
      }
    }
  }
};

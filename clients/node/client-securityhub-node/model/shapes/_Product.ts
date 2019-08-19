import { _CategoryList } from "./_CategoryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Product: _Structure_ = {
  type: "structure",
  required: ["ProductArn"],
  members: {
    ProductArn: {
      shape: {
        type: "string"
      }
    },
    ProductName: {
      shape: {
        type: "string"
      }
    },
    CompanyName: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Categories: {
      shape: _CategoryList
    },
    MarketplaceUrl: {
      shape: {
        type: "string"
      }
    },
    ActivationUrl: {
      shape: {
        type: "string"
      }
    },
    ProductSubscriptionResourcePolicy: {
      shape: {
        type: "string"
      }
    }
  }
};

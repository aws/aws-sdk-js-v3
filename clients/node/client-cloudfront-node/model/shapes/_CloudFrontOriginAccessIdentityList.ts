import { _CloudFrontOriginAccessIdentitySummaryList } from "./_CloudFrontOriginAccessIdentitySummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CloudFrontOriginAccessIdentityList: _Structure_ = {
  type: "structure",
  required: ["Marker", "MaxItems", "IsTruncated", "Quantity"],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    NextMarker: {
      shape: {
        type: "string"
      }
    },
    MaxItems: {
      shape: {
        type: "integer"
      }
    },
    IsTruncated: {
      shape: {
        type: "boolean"
      }
    },
    Quantity: {
      shape: {
        type: "integer"
      }
    },
    Items: {
      shape: _CloudFrontOriginAccessIdentitySummaryList
    }
  }
};

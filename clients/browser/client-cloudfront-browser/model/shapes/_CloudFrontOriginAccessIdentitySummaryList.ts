import { List as _List_ } from "@aws-sdk/types";
import { _CloudFrontOriginAccessIdentitySummary } from "./_CloudFrontOriginAccessIdentitySummary";

export const _CloudFrontOriginAccessIdentitySummaryList: _List_ = {
  type: "list",
  member: {
    shape: _CloudFrontOriginAccessIdentitySummary,
    locationName: "CloudFrontOriginAccessIdentitySummary"
  }
};

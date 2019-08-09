import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have exceeded the maximum number of tags for this DAX cluster.</p>
 */
export interface TagQuotaPerResourceExceeded
  extends __ServiceException__<_TagQuotaPerResourceExceededDetails> {
  name: "TagQuotaPerResourceExceeded";
}

export interface _TagQuotaPerResourceExceededDetails {}

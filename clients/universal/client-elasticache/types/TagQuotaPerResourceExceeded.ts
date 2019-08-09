import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request cannot be processed because it would cause the resource to have more than the allowed number of tags. The maximum number of tags permitted on a resource is 50.</p>
 */
export interface TagQuotaPerResourceExceeded
  extends __ServiceException__<_TagQuotaPerResourceExceededDetails> {
  name: "TagQuotaPerResourceExceeded";
}

export interface _TagQuotaPerResourceExceededDetails {}

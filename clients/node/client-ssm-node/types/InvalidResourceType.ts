import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource type is not valid. For example, if you are attempting to tag an instance, the instance must be a registered, managed instance.</p>
 */
export interface InvalidResourceType
  extends __ServiceException__<_InvalidResourceTypeDetails> {
  name: "InvalidResourceType";
}

export interface _InvalidResourceTypeDetails {}

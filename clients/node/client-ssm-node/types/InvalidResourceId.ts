import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource ID is not valid. Verify that you entered the correct ID and try again.</p>
 */
export interface InvalidResourceId
  extends __ServiceException__<_InvalidResourceIdDetails> {
  name: "InvalidResourceId";
}

export interface _InvalidResourceIdDetails {}

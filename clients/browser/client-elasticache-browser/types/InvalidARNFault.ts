import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
 */
export interface InvalidARNFault
  extends __ServiceException__<_InvalidARNFaultDetails> {
  name: "InvalidARNFault";
}

export interface _InvalidARNFaultDetails {}

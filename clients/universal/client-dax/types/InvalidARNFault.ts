import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The Amazon Resource Name (ARN) supplied in the request is not valid.</p>
 */
export interface InvalidARNFault
  extends __ServiceException__<_InvalidARNFaultDetails> {
  name: "InvalidARNFault";
}

export interface _InvalidARNFaultDetails {}

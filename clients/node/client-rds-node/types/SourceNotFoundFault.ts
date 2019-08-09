import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested source could not be found.</p>
 */
export interface SourceNotFoundFault
  extends __ServiceException__<_SourceNotFoundFaultDetails> {
  name: "SourceNotFoundFault";
}

export interface _SourceNotFoundFaultDetails {}

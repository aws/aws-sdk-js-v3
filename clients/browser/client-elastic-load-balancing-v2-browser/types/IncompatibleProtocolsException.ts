import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified configuration is not valid with this protocol.</p>
 */
export interface IncompatibleProtocolsException
  extends __ServiceException__<_IncompatibleProtocolsExceptionDetails> {
  name: "IncompatibleProtocolsException";
}

export interface _IncompatibleProtocolsExceptionDetails {}

import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This operation requires the HTTPS protocol. Ensure that you specify the HTTPS protocol in your request, or omit the <code>RequiredProtocols</code> element from your distribution configuration.</p>
 */
export interface InvalidRequiredProtocol
  extends __ServiceException__<_InvalidRequiredProtocolDetails> {
  name: "InvalidRequiredProtocol";
}

export interface _InvalidRequiredProtocolDetails {
  /**
   * _string shape
   */
  Message?: string;
}

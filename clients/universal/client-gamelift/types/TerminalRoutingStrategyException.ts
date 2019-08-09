import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The service is unable to resolve the routing for a particular alias because it has a terminal <a>RoutingStrategy</a> associated with it. The message returned in this exception is the message defined in the routing strategy itself. Such requests should only be retried if the routing strategy for the specified alias is modified. </p>
 */
export interface TerminalRoutingStrategyException
  extends __ServiceException__<_TerminalRoutingStrategyExceptionDetails> {
  name: "TerminalRoutingStrategyException";
}

export interface _TerminalRoutingStrategyExceptionDetails {
  /**
   * _NonEmptyString shape
   */
  Message?: string;
}

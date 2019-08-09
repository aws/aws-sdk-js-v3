/**
 * <p>A <code>RoutingProfileSummary</code> object that contains information about a routing profile, including ARN, Id, and Name.</p>
 */
export interface _RoutingProfileSummary {
  /**
   * <p>The identifier of the routing profile.</p>
   */
  Id?: string;

  /**
   * <p>The ARN of the routing profile.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the routing profile.</p>
   */
  Name?: string;
}

export type _UnmarshalledRoutingProfileSummary = _RoutingProfileSummary;

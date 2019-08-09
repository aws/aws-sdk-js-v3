/**
 * <p>A complex type that describes change information about changes made to your hosted zone.</p>
 */
export interface _ChangeInfo {
  /**
   * <p>The ID of the request.</p>
   */
  Id: string;

  /**
   * <p>The current state of the request. <code>PENDING</code> indicates that this request has not yet been applied to all Amazon Route 53 DNS servers.</p>
   */
  Status: "PENDING" | "INSYNC" | string;

  /**
   * <p>The date and time that the change request was submitted in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601 format</a> and Coordinated Universal Time (UTC). For example, the value <code>2017-03-27T17:48:16.751Z</code> represents March 27, 2017 at 17:48:16.751 UTC.</p>
   */
  SubmittedAt: Date | string | number;

  /**
   * <p>A complex type that describes change information about changes made to your hosted zone.</p> <p>This element contains an ID that you use when performing a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetChange.html">GetChange</a> action to get detailed information about the change.</p>
   */
  Comment?: string;
}

export interface _UnmarshalledChangeInfo extends _ChangeInfo {
  /**
   * <p>The date and time that the change request was submitted in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601 format</a> and Coordinated Universal Time (UTC). For example, the value <code>2017-03-27T17:48:16.751Z</code> represents March 27, 2017 at 17:48:16.751 UTC.</p>
   */
  SubmittedAt: Date;
}
